const ALL_deepDigITS_REGEX = /^\d+$/;

export function isNum(str: number | string) {
    return String(str).match(ALL_deepDigITS_REGEX);
}

export function regexEscape(str: string) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

