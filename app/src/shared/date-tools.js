
export function shortDateStrg(date) {
    const day = date.getDate();
    let strg = "";
    if (day < 10) {
        strg += "0";
    }
    strg += day;
    strg += ".";
    const month = date.getMonth() + 1;
    if (month < 10) {
        strg += "0";
    }
    strg += month;
    strg += ".";
    return strg;
}

export function fullDateStrg(date) {
    let strg = shortDateStrg(date);
    const year = date.getFullYear();
    strg += year;
    return strg;
}
