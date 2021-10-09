import { useState } from "react";
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType } from "@zxing/library";
import { useInterval } from "ahooks";

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
    streamObject: MediaStream | null,
    videoElement: HTMLVideoElement | null
) => {
    codeResult: string | null;
    error: CodeScannerHookError | null;
};

export const useCodeScanner: CodeScannerHook = (streamObject, videoElement) => {
    const [codeResult, setCodeResult] = useState<string | null>(null);
    const [error, setError] = useState<"ERROR_CODE_SCANNER" | null>(null);

    useInterval(() => {

        if (streamObject && videoElement) {
            const browserReader = new BrowserMultiFormatReader(hints, 2000);
            browserReader.decodeOnceFromStream(streamObject, videoElement).then(result => {
                setCodeResult(result.getText())
            }).catch((e) => {
                console.log(e);
                setError("ERROR_CODE_SCANNER");
            }
            );
        }
    }, 500, { immediate: false });

    return { codeResult, error };
};
