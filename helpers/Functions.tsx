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

export const classNames = (...classes:string[]) => {
    return classes.filter(Boolean).join(' ')
}

export const formatNumber = (number:any, digits:number) => {
    number = parseFloat(parseFloat(number).toFixed(digits));

    if (!number || number == 0) {
        return 0;
    }

    return number.toLocaleString(undefined, { 
        minimumFractionDigits: digits
    });
}

export const shortenNumber = (number:any, digits:number = 2, addPrefix:boolean = true) => {
    if (typeof number == "string") {
        number = parseInt(number);
    }

    if (number < 100000)
        return formatNumber(number, digits);
    else if (number >= 100_000 && number < 1_000_000)
        return formatNumber(number / 1_000, digits) + (addPrefix && "k");
    else if (number >= 1_000_000 && number < 1_000_000_000)
        return formatNumber(number / 1_000_000, digits) + (addPrefix && "m");
    else if (number >= 1_000_000_000)
        return formatNumber(number / 1_000_000_000, digits) + (addPrefix && "b");
}