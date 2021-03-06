import { createElement, FunctionComponent, useCallback } from "react";
import { ValueStatus } from "mendix";
import { BarcodeScanner as BarcodeScannerComponent } from "./components/BarcodeScanner";
import { BarcodeScannerContainerProps } from "../typings/BarcodeScannerProps";
import { executeAction } from "./components/functions";

const BarcodeScanner: FunctionComponent<BarcodeScannerContainerProps> = props => {
    const onDetect = useCallback(
        (data: string) => {
            if (props.datasource?.status !== ValueStatus.Available) {
                return;
            }
            if (data !== props.datasource.value) {
                props.datasource.setValue(data);
            }
            executeAction(props.onDetect);
        },
        [props.onDetect, props.datasource]
    );
    return (
        <BarcodeScannerComponent
            onDetect={onDetect}
            showMask={props.showMask}
            class={props.class}
            heightUnit={props.heightUnit}
            height={props.height}
            widthUnit={props.widthUnit}
            width={props.width}
            decodePath={props.decodePath}
            offline={props.offline}
        />
    );
};

export default BarcodeScanner;
