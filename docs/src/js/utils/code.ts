export const CODE_STRIP_START = "/* strip-start */";
export const CODE_STRIP_END = "/* strip-end */";

/**
 * Strip ignored text from example code.
 */
export function stripIgnored(code: string): string {
    if (!code.includes(CODE_STRIP_START)) {
        return code;
    }
    let components = code.split(CODE_STRIP_START);
    let left = components[0];
    let right = components.slice(1).join(CODE_STRIP_START);
    return stripIgnored(
        left +
        right
            .split(CODE_STRIP_END)
            .slice(1)
            .join(CODE_STRIP_END));
}
