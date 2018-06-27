import axios from 'axios'
import { Toast } from 'antd-mobile-rn'

let cancel, promiseArr = {};
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('operate cancel');
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
    return config
}, error => {
    return Promise.reject(error)
});

axios.defaults.headers = {
    'Content-Type': 'application/json',
};
axios.defaults.timeout = 30 * 1000;
axios.defaults.baseURL = 'http://codewithray.com'

export default (url = '', data = '', method = 'POST') => new Promise((resolve, reject) => {

    if (url === '') {
        throw new Errror('interface url required.')
    } else {
        url = '/api/' + url
    }

    if (method === 'POST') {
        data = JSON.stringify(data || {})
    } else {
        url += data
        data = ''
    }

    if (__DEV__) {
        log.l(require('moment')().format('HH:mm:ss'))
        log.l(`API: ${axios.defaults.baseURL + url}`)
        log.l(`METHOD: ${method}`)
        log.l(`BODY: ${data || ''}`)
    }

    Toast.loading()

    return (
        axios({
            url,
            data,
            method,
            cancelToken: new CancelToken(c => {
                cancel = c
            })
        }).then(res => {
            Toast.hide()
            log.l('RESPONSE-SUCCESS', res)
            res && res.status === 0 ? resolve(res) : reject(res)
        }).catch(ex => {
            Toast.fail(ex ? (typeof ex === 'object' ? ex.message : ex) : 'error')
        })
    )
})