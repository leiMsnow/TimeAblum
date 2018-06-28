import { Auth, ImgOps, Conf, Rs, RPC } from './qiniu';

const bucket = 'timeablum'

export function uploadFile(uri, key) {
    log.l('uploadFile:', uri)
    //upload file to Qiniu
    var putPolicy = new Auth.PutPolicy2(
        { scope: `${bucket}:${key}` }
        // { scope: bucket }
    );
    var uptoken = putPolicy.token();
    let formInput = {
        key,
    }

    RPC.uploadFile(uri, uptoken, formInput)
        .then(res => {
            log.l(res)
        }).catch(ex => {
            log.l(ex)
        })
}

// export function downloadUrl(downloadUrl) {
//     //download private file
//     var getPolicy = new Auth.GetPolicy();
//     let url = getPolicy.makeRequest(downloadUrl);
//     //fetch from this url
// }

// //image sync operation
// var imgInfo = new ImgOps.ImageView(1, 100, 200);
// let url = imgInfo.makeRequest('http://7xoaqn.com2.z0.glb.qiniucdn.com/16704/6806d20a359f43c88f1cb3c59980e5ef');
// //fetch from this url



//image info 
// var self = this;
// var imgInfo = new ImgOps.ImageInfo();
// let url = imgInfo.makeRequest('http://7xoaqn.com2.z0.glb.qiniucdn.com/16704/6806d20a359f43c88f1cb3c59980e5ef');
// fetch(url).then((response) => {
//     return response.text();
// }).then((responseText) => {
//     self.setState({ info: responseText });
// }).catch((error) => {
//     console.warn(error);
// });

//resource operation
//stat info
// var self = this;
// Rs.stat(bucket)
//     .then((response) => response.text())
//     .then((responseText) => {
//         self.setState({ info: responseText });
//     })
//     .catch((error) => {
//         console.warn(error);
//     });