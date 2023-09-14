export const censorWord = (str:string) => {
    return str[0] + "*".repeat(str.length - 2) + str.slice(-1);
}

export const censorEmail = (email:string) => {
    var start = email.substring(0, 8);
    let end   = email.substring(email.indexOf("@"), email.length)
    return start + "..." + end;
}

export const capitalize = (str?:string) => {
    if (!str) {
        return str;
    }
    let first = str.charAt(0).toUpperCase();
    let end = str.substring(1, str.length);
    return first + end;
}