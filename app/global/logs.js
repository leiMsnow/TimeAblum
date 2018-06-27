
const prefixl = ['%c[LOG]', 'color: green; background-color:black'];
const prefixw = ['%c[WARN]', 'color: yellow; background-color:black'];
const prefixe = ['%c[ERROR]', 'color: red; background-color:black'];
const prefixi = ['%c[Info]', 'color: blue; background-color:black'];

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