import { Base64 } from "js-base64";

export const base64encode = (text: string): string => Base64.encode(text);

export const base64decode = (data: string): string => Base64.decode(data);
