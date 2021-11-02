export type MediaStreamHookError = "ERROR_NOT_FOUND" | "ERROR_NOT_ALLOWED" | "ERROR_MEDIA_STREAM";

export function browserSupportsCameraAccess(): boolean {
    return "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices;
}
