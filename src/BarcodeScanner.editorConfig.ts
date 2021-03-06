import { BarcodeScannerContainerProps } from "../typings/BarcodeScannerProps";
import { Properties, StructurePreviewProps } from "./components/PageEditor";
import { hidePropertyIn, transformGroupsIntoTabs } from "./components/PageEditorUtils";

export function getProperties(
    values: BarcodeScannerContainerProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    if (values.offline === true) {
        hidePropertyIn(defaultProperties, values, "decodePath");
    }
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}

export function getPreview(): StructurePreviewProps | null {
    return {
        type: "Image",
        document: decodeURIComponent(
            `<svg width="375" height="375" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h375v375H0V0z" fill="#fff"/><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M102.622 87.9539l-19.018-.0557v19.9948l19.018.038V87.9539z" fill="gray"/><path fill-rule="evenodd" clip-rule="evenodd" d="M264.743 166l-18.743.011v39.698l48.353-.114v-19.806l-29.61.044V166z" fill="#000105"/><path fill-rule="evenodd" clip-rule="evenodd" d="M264.743 166l-18.743.011V196h48.353v-10.211l-29.61.044V166zM212.916 137.975l-18.83-.013v19.895l18.83-.004v-19.878z" fill="gray"/><path fill-rule="evenodd" clip-rule="evenodd" d="M309.696 233.703l-18.665.068v19.809l18.665-.085v-19.792zM309.696 331.013l18.633-.152v-23.068l-18.633.13v23.09z" fill="#000105"/><path fill-rule="evenodd" clip-rule="evenodd" d="M170.503 126.327l-18.901-.023v19.934l18.901.006v-19.917zM102.622 179.518V159.54l-19.018.006v19.994l19.018-.022z" fill="gray"/><path fill-rule="evenodd" clip-rule="evenodd" d="M83.6041 221.196v-19.995l-19.051.041v20.011l19.051-.057z" fill="#000105"/><path fill-rule="evenodd" clip-rule="evenodd" d="M219.186 49.6566l-48.683-.2414v19.9166l48.683.1979V49.6566zM294.145 185.896l35.739-.053v-19.774l-35.739.021v19.806z" fill="gray"/><path fill-rule="evenodd" clip-rule="evenodd" d="M273.893 288.35v42.952l18.695-.152v-23.107l17.108-.12v-19.792l-35.803.219z" fill="#000105"/><path fill-rule="evenodd" clip-rule="evenodd" d="M219.186 109.825V89.9524l-48.683-.1392V63.2571l-18.901-.0764v46.5123l18.901.037 48.683.095z" fill="gray"/><path fill-rule="evenodd" clip-rule="evenodd" d="M156.33 220.975l18.894-.058 18.862-.057v-19.896l-18.862.041v-19.913l-17.318.021-18.924.024V159.53l-18.956.005v41.588l-17.404.037v19.978l17.404-.053 18.956-.057v-19.945l17.348-.038v19.93z" fill="#000105"/><path d="M175.224 181.092V196.5H120.026v-36.965l18.956-.005v21.607l18.924-.024 17.318-.021z" fill="gray"/><path fill-rule="evenodd" clip-rule="evenodd" d="M230.149 179.369l-18.801.022v43.073l18.801-.058v-43.037z" fill="#000105"/><path fill-rule="evenodd" clip-rule="evenodd" d="M230.149 179.369l-18.801.022V196h18.801v-16.631z" fill="gray"/><path fill-rule="evenodd" clip-rule="evenodd" d="M239.537 270.359l18.753-.099v-42.982l-18.753.062v43.019zM222.319 234.021l-18.814.069-48.751.177v19.931l48.751-.222v58.005l-48.751.348v19.93l48.751-.39 18.814-.152v-39.741l17.218-.108v-19.854l-17.218.091v-38.084z" fill="#000105"/><path fill-rule="evenodd" clip-rule="evenodd" d="M311.25 128.149l-56.083-.065V68.5613l56.083.2151v59.3726zm18.634-77.4273l-91.911-.4278v97.6271l91.911.023V50.7217z" fill="gray"/><path fill-rule="evenodd" clip-rule="evenodd" d="M292.588 88.5122l-18.695-.0552v19.824l18.695.038V88.5122z" fill="gray"/><path fill-rule="evenodd" clip-rule="evenodd" d="M62.964 252.946l57.062-.254v59.886l-57.062.408v-60.04zm-17.4933 80.193l93.5113-.754v-98.061l-93.5113.341v98.474z" fill="#000105"/><path fill-rule="evenodd" clip-rule="evenodd" d="M82.0176 292.854l19.0204-.12v-19.978l-19.0204.101v19.997zM162.632 272.425v19.925l18.883-.119v-19.907l-18.883.101z" fill="#000105"/><path fill-rule="evenodd" clip-rule="evenodd" d="M120.026 127.929l-57.062-.066V67.8241l57.062.2187v59.8862zm18.956-78.0963l-93.5113-.4354v98.4757l93.5113.023V49.8327z" fill="gray"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M305 15v12h42v42h12V15h-54zM69 359v-12H27v-42H15v54h54zm278-54h12v54h-54v-12h42v-42zM15 69h12V27h42V15H15v54z" fill="#000"/><path d="M24 185.117h327v11.44H24v-11.44z" fill="#E33F4E"/><defs><clipPath id="clip0"><path fill="#fff" transform="translate(45 49)" d="M0 0h285v284.494H0z"/></clipPath></defs></svg>`
        ),
        height: 275,
        width: 275
    };
}
