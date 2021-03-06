const {remote, Cookies} = require('electron');

let Cookie = (function () {
    return {
       // return All Cookie
        all : ()=>{
            return new Promise(function (resolve, reject) {
                let currentWindow = remote.getCurrentWindow();
                currentWindow.webContents.session.cookies.get({}, function (error, cookies) {
                    if (error){
                        reject(error);
                    }
                    else {
                        resolve(cookies);
                    }
                });
            });
        },
        // Cookies.get
        get : (url, name=null,all=false,value=null,domain=null,path=null,secure=null,httpOnly=null,expirationDate=null)=>{
            return new Promise(function (resolve, reject) {
                let currentWindow = remote.getCurrentWindow();
                currentWindow.webContents.session.cookies.get({
                    url: url,
                    name: name,
                    value : value,
                    domain : domain,
                    path : path,
                    secure : secure,
                    httpOnly : httpOnly,
                    expirationDate : expirationDate,
                }, function (error, cookies) {
                    if (error){
                        reject(error);
                    }
                    else {
                        if (all===true){
                            resolve(cookies);
                        }
                        else {
                            resolve(cookies[0]);
                        }
                    }
                });
            });
        },
        // Cookies Set
        set : (url,name=null,value=null,expirationDay=null,domain=null,path=null,secure=null,httpOnly=null)=>{
            let currentWindow = remote.getCurrentWindow();
            if (expirationDay !==null){
                expirationDay = new Date().getTime() + expirationDay*24*60*60;
            }
            currentWindow.webContents.session.cookies.set({
                url : url,
                name : name,
                value : value,
                expirationDate : expirationDay,
                domain : domain,
                path : path,
                secure : secure,
                httpOnly : httpOnly,
            },(error)=>{
                if (error){
                    return error;
                }
            });
        },
        delete : (url,name)=>{
            let currentWindow = remote.getCurrentWindow();
            currentWindow.webContents.session.cookies.remove(String(url),name,()=>{
            });
        }
    }
})();

module.exports = Cookie;




