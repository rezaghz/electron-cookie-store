#Electron Cookie Save

NPM package For Easy Management Cookies in Electron.

##Installation
install by NPM
```bash
$ npm install electron-cookie-save --save
```
install by Yarn

```bash
$ yarn add electron-cookie-save
```
##How To Use ? 

### Set Cookie

```javascript
/**
* @param {string} url- The url to associate the cookie with.
* @param {string} {name = null} - name of the Cookie
* @param {string} {value = null} - value of name Cookie
* @param {number} {expirationDate} - Cookie expiration time of day
* @param {string} {domain=null} - The domain of the cookie. Empty by default if omitted.
* @param {string} {path=null} - The path of the cookie. Empty by default if omitted.
* @param  {boolean} {secure=null} - Whether the cookie should be marked as Secure. Defaults to false.
* @param  {boolean} {httpOnly=null} Whether the cookie should be marked as HTTP only. Defaults to false.
*/
const Cookie = require('electron-cookie-save');
Cookie.set("http://myUrl","cookieName","cookieValue",7);
```

### Get Cookie

```javascript
/**
* @param {string} url - The url to associate the cookie with.
* @param {string} {name=null} - name of the Cookie
* @param {boolean} {all = false} - get All Cookie of the Address
* @param {string} {domain=null} - The domain of the cookie. Empty by default if omitted.
* @param {string} {path=null} - The path of the cookie. Empty by default if omitted.
* @param  {boolean} {secure=null} - Whether the cookie should be marked as Secure. 
* @param  {boolean} {session =null} - Filters out session or persistent cookies. 
*/
const Cookie = require('electron-cookie-save');
Cookie.get("http://myUrl","cookieName").then(cookie=>{
    console.log(cookie);
}).catch(error=>{
    console.log(error);
});

```

### Get All Cookie 

```javascript
const Cookie = require('electron-cookie-save');
Cookie.all().then(cookies=>{
    console.log(cookies);
}).catch(errors=>{
    console.log(errors);
});
```

### Delete Cookie

```javascript
/**
* @param {string} url = The url to associate the cookie with.
* @param {string} name = name of the Cookie
*/
const Cookie = require('electron-cookie-save');
Cookie.delete("http://myUrl","cookieName");
```




