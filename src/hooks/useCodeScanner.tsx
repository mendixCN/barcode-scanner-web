import { useEffect, useState } from "react";
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType } from "@zxing/library";
import { useInterval } from "ahooks";

// @ts-ignore
import webcam from "../webcam.js";

webcam.set( 'constraints', {
		mandatory: {
			minWidth: 500,
			minHeight: 500,
			minFrameRate: 20
		},
		optional: [
			{ minFrameRate: 30 }
		]
});

const hints = new Map();
// RSS_Expanded is not production ready yet.
const exclusions: BarcodeFormat[] = [BarcodeFormat.RSS_EXPANDED];
// `BarcodeFormat` is a TypeScript enum. Calling `Object.values` on it returns an array of string and ints, we only want the latter.
const formats = Object.values(BarcodeFormat)
    .filter((format: string | BarcodeFormat) => typeof format !== "string")
    .filter((format: BarcodeFormat) => !exclusions.includes(format)) as BarcodeFormat[];
hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);

export type CodeScannerHookError = "ERROR_CODE_SCANNER";

type CodeScannerHook = (
    videoId: string,
    offline: boolean,
    decodePath: string
) => {
    codeResult: string | null;
    error: CodeScannerHookError | null;
};

const browserReader = new BrowserMultiFormatReader(hints, 2000);

export const useCodeScanner: CodeScannerHook = (videoId, offline, decodePath) => {
    const [codeResult, setCodeResult] = useState<string | null>(null);
    const [error] = useState<"ERROR_CODE_SCANNER" | null>(null);
    const [delay, setDelay] = useState<null | number>(null);

    useEffect(() => {
        webcam.on("load", () => {
            setDelay(500);
        });
        webcam.attach(videoId);
        return () => {
            setDelay(null);
            webcam.reset();
        };
    }, [videoId]);

    useInterval(
        async () => {
            await new Promise<void>(resolve => {
                webcam.snap((dataUri: string) => {
                    if (offline) {
                        const previewElem = document.querySelector(`[id='${videoId}'] video`) as HTMLVideoElement;
                        if (previewElem) {
                            browserReader
                                .decodeFromImageUrl(dataUri)
                                .then(result => {
                                    if (result) {
                                        setCodeResult(result.getText());
                                    }
                                    resolve();
                                })
                                .catch(() => {
                                    resolve();
                                });
                        }
                    } else {
                        webcam.upload(dataUri, decodePath, (code: number, text: string) => {
                            if (code >= 200 && code < 300) {
                                setCodeResult(text);
                            }
                            resolve();
                        });
                    }
                });
            });
        },
        delay,
        { immediate: false }
    );

    return { codeResult, error };
};
