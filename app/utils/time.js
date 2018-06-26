export const timeConverter = (UNIX_timestamp) => {
    if (UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        return month + '/' + date + '/' + year;
    }
    return '';
};


export function displayTime (e, s) {
    let _f = Math.floor.bind(Math);
    let _t = (e - s) / 1000;
    let _h = repair(_f(_t / 60 / 60 % 24));
    let _m =  repair(_f(_t / 60 % 60));
    let _s =  repair(_f(_t % 60));
    return [
        _h.match('00') ? '' : _h,
        _m.match('00') ? '' : _m,
        _s.match('00') ? '0' : _s
    ];
};


function repair(number) {
    return number < 10 ? '0' + number : '' + number;
}