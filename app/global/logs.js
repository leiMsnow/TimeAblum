
const prefix = ['%c[LOGS]','color: #FBE37A'];

const log = (...message) => {
    if (__DEV__) {
        console.log(...prefix, ...message);
    }
};

const warn = (...message) => {
    if (__DEV__) {
        console.warn(...prefix, ...message);
    }
};

const error = (...message) => {
    if (__DEV__) {
        console.error(...prefix, ...message);
    }
};

const info = (...message) => {
    if (__DEV__) {
        console.info(...prefix, ...message);
    }
};

export {
    log,
    warn,
    error,
    info
}