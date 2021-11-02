import { createElement, CSSProperties, ReactElement, ReactNode, useEffect, useMemo } from "react";
import classNames from "classnames";
import { useCodeScanner, CodeScannerHookError } from "../hooks/useCodeScanner";
import { browserSupportsCameraAccess, MediaStreamHookError } from "../hooks/useMediaStream";

import "../ui/BarcodeScanner.scss";
let lastVideoId = 1;
export type WidthUnitEnum = "percentage" | "pixels";

export type HeightUnitEnum = "percentageOfWidth" | "pixels" | "percentageOfParent";

export interface Dimensions {
    widthUnit: WidthUnitEnum;
    width: number;
    heightUnit: HeightUnitEnum;
    height: number;
}

export function getDimensions<T extends Dimensions>(props: T): CSSProperties {
    const style: CSSProperties = {
        width: props.widthUnit === "percentage" ? `${props.width}%` : `${props.width}px`
    };
    if (props.heightUnit === "percentageOfWidth") {
        const ratio = (props.height / 100) * props.width;
        if (props.widthUnit === "percentage") {
            style.height = "auto";
            style.paddingBottom = `${ratio}%`;
        } else {
            style.height = `${ratio}px`;
        }
    } else if (props.heightUnit === "pixels") {
        style.height = `${props.height}px`;
    } else if (props.heightUnit === "percentageOfParent") {
        style.height = `${props.height}%`;
    }

    return style;
}

export interface BarcodeScannerProps extends Dimensions {
    onDetect?: (data: string) => void;
    showMask: boolean;
    class: string;
    offline: boolean;
    decodePath: string;
}

function getErrorMessage(errorEnum: MediaStreamHookError | CodeScannerHookError | null): string | null {
    switch (errorEnum) {
        case "ERROR_NOT_FOUND":
            return "Error in barcode scanner: no camera media devices were found.";
        case "ERROR_MEDIA_STREAM":
            return "Error in barcode scanner: an unexpected error occurred while retrieving the camera media stream.";
        case "ERROR_CODE_SCANNER":
            return "Error in barcode scanner: an unexpected error occurred while detecting a barcode in the camera media stream.";
        case "ERROR_NOT_ALLOWED":
        default:
            return null;
    }
}

interface BarcodeScannerOverlayProps extends Dimensions {
    showMask: boolean;
    className: string;
    children?: ReactNode;
}

export function BarcodeScannerOverlay({
    children,
    className: className,
    showMask,
    ...dimensions
}: BarcodeScannerOverlayProps): ReactElement {
    return (
        <div className={classNames("mx-barcode-scanner", className)} style={getDimensions(dimensions)}>
            <div className={classNames("mx-barcode-scanner-content")}>
                {children}
                {showMask ? (
                    <div className={classNames("video-canvas")}>
                        <div className={classNames("canvas-left", "canvas-background")} />
                        <div className={classNames("canvas-middle")}>
                            <div className={classNames("canvas-middle-top", "canvas-background")} />
                            <div className={classNames("canvas-middle-middle")}>
                                <div className={classNames("corner", "corner-top-left")} />
                                <div className={classNames("corner", "corner-top-right")} />
                                <div className={classNames("corner", "corner-bottom-right")} />
                                <div className={classNames("corner", "corner-bottom-left")} />
                            </div>
                            <div className={classNames("canvas-middle-bottom", "canvas-background")} />
                        </div>
                        <div className={classNames("canvas-right", "canvas-background")} />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export function BarcodeScanner({
    onDetect,
    showMask,
    class: className,
    offline,
    decodePath,
    ...dimensions
}: BarcodeScannerProps): ReactElement | null {
    const videoId = useMemo(() => +new Date() + "-video" + lastVideoId++, []);
    const { codeResult, error: errorCodeScanner } = useCodeScanner(videoId, offline, decodePath);
    const supportsCameraAccess = browserSupportsCameraAccess();

    // If we have an onDetect handler and a barcode has been scanned and it was the first detected code, trigger the onDetect handler.
    useEffect(() => {
        if (onDetect && codeResult) {
            onDetect(codeResult);
        }
    }, [codeResult, onDetect]);

    if (!supportsCameraAccess) {
        // Mendix ensures that Mendix apps are only run in the supported browsers and all of them
        // support the `navigator.mediaDevices.getUserMedia` API. So no additional error handling
        // needs to be done, but just in case we soft catch it.
        return (
            <span>
                The barcode scanner widget is only compatible with certain browsers and requires a secure HTTPS
                connection in certain browsers. If you encounter this error message as an user, please contact your
                system administrator. If you are a Mendix developer, please refer to the appropriate docs on how to
                resolve this issue.
            </span>
        );
    }
    if (errorCodeScanner) {
        const errorMessage = getErrorMessage(errorCodeScanner);
        if (errorMessage) {
            return <span>{errorMessage}</span>;
        }
    }
    return (
        <BarcodeScannerOverlay className={className} showMask={showMask} {...dimensions}>
            <div id={videoId} className={classNames("video")} />
        </BarcodeScannerOverlay>
    );
}
