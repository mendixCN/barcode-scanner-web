import { createElement, ReactElement } from "react";

import { BarcodeScannerPreviewProps } from "../typings/BarcodeScannerProps";
import { BarcodeScannerOverlay } from "./components/BarcodeScanner";

declare function require(name: string): string;

export function preview(props: BarcodeScannerPreviewProps): ReactElement {
    return (
        <BarcodeScannerOverlay
            showMask={props.showMask}
            className={props.class}
            heightUnit={props.heightUnit}
            widthUnit={props.widthUnit}
            // These are set by default values in widget properties.
            height={props.height!}
            width={props.width!}
        >
            <svg
                className="design-preview-qr-code"
                width="161"
                height="160"
                viewBox="0 0 161 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M160.245 0H0V160H160.245V0Z" fill="white" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.9811 29.9328L29.7632 29.9058V39.5973L38.9811 39.616V29.9328Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M117.563 67.7624L108.478 67.7679V87.0097L131.916 86.9545V77.3543L117.563 77.3757V67.7624Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M117.563 67.7624L108.478 67.7679V82.3039H131.916V77.3543L117.563 77.3757V67.7624Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M92.442 54.1784L83.3149 54.172V63.8156L92.442 63.8135V54.1784Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M139.352 100.579L130.306 100.612V110.214L139.352 110.173V100.579Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M139.352 147.746L148.384 147.672V136.491L139.352 136.554V147.746Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M71.8838 48.5326L62.7222 48.5214V58.1835L71.8838 58.187V48.5326Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.9811 74.3151V64.6312L29.7632 64.634V74.3254L38.9811 74.3151Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.7632 94.5165V84.825L20.5291 84.8444V94.5448L29.7632 94.5165Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M95.4814 11.3696L71.8838 11.2526V20.9063L95.4814 21.0022V11.3696Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M131.814 77.4061L149.137 77.3805V67.7961L131.814 67.8058V77.4061Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M121.999 127.067V147.886L131.06 147.812V136.612L139.352 136.554V126.96L121.999 127.067Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M95.4813 40.5342V30.9015L71.8838 30.834V17.962L62.7222 17.9249V40.4699L71.8838 40.4878L95.4813 40.5342Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M65.014 94.4093L74.1722 94.3817L83.3151 94.3541V84.7103L74.1722 84.7297V75.0776L65.7779 75.088L56.6053 75.0997V64.6265L47.4174 64.6292V84.787L38.9812 84.805V94.4887L47.4174 94.4625L56.6053 94.4349V84.7677L65.014 84.749V94.4093Z"
                    fill="black"
                />
                <path
                    d="M74.1722 75.0776V82.5463H65.778H56.6053H47.4175V64.6292L56.6053 64.6265V75.0997L65.778 75.088L74.1722 75.0776Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M100.795 74.2426L91.6816 74.2529V95.1311L100.795 95.1034V74.2426Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M100.795 74.2426L91.6816 74.2529V82.3038H100.795V74.2426Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M105.345 118.347L114.435 118.298V97.4643L105.345 97.4947V118.347Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M96.9994 100.733L87.8799 100.766L64.2507 100.852V110.513L87.8799 110.406V138.521L64.2507 138.689V148.35L87.8799 148.161L96.9994 148.087V128.824L105.345 128.772V119.149L96.9994 119.193V100.733Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M140.105 49.4155L112.922 49.3844V20.5329L140.105 20.6372V49.4155ZM149.137 11.8859L104.587 11.6786V58.9993L149.137 59.0103V11.8859Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M131.06 30.2034L121.999 30.1766V39.7856L131.06 39.8042V30.2034Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.7587 109.906L47.4174 109.782V138.81L19.7587 139.008V109.906ZM11.2795 148.777L56.6052 148.411V100.88L11.2795 101.045V148.777Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.9941 129.249L38.2136 129.192V119.508L28.9941 119.557V129.249Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M68.0681 119.348V129.005L77.2214 128.947V119.299L68.0681 119.348Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.4174 49.309L19.7587 49.2774V20.1757L47.4174 20.2817V49.309ZM56.6052 11.455L11.2795 11.244V58.9758L56.6052 58.9876V11.455Z"
                    fill="black"
                />
            </svg>
        </BarcodeScannerOverlay>
    );
}

export function getPreviewCss(): string {
    return require("./ui/BarcodeScanner.scss") + require("./ui/BarcodeScannerPreview.scss");
}
