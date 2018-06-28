
const prefixl = ['%c LOG ', 'color: white; background-color:green'];
const prefixw = ['%c WARN ', 'color: white; background-color:yellow'];
const prefixe = ['%c ERROR ', 'color: white; background-color:red'];
const prefixi = ['%c INFO ', 'color: white; background-color:blue'];

const l = (...message) => {
    if (__DEV__) {
        console.log(...prefixl, ...message);
    }
};

const w = (...message) => {
    if (__DEV__) {
        console.warn(...prefixw, ...message);
    }
};

const e = (...message) => {
    if (__DEV__) {
        console.error(...prefixe, ...message);
    }
};

const i = (...message) => {
    if (__DEV__) {
        console.info(...prefixi, ...message);
    }
};

export {
    l,
    w,
    e,
    i
}