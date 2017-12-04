// import 'babel-polyfill';
import fetch from "cross-fetch";
import fetchDefaults from "fetch-defaults";
import Cookie from "js-cookie";

export const ROOT_URL = "";
export const AUTH_URL = "";
export const PUBLIC_URL = "/api/public";
export const API_URL = "/api/v1";

/*
description:
@return: fetch function
*/
const buildRequest = () => (
    fetchDefaults(fetch, ROOT_URL, {
        headers: Object.assign({
            // header defaults
        }, Cookie.getJSON().authHeaders)
    })
);

const responseHeaders = (response) => {
    Cookie.set("authHeaders", {
        "access-token": response.headers.map["access-token"],
        "token-type": response.headers.map["token-type"],
        "client": response.headers.map["client"],
        "expiry": response.headers.map["expiry"],
        "uid": response.headers.map["uid"]
    });
};

const responseHandler = (response)  => {
    if (response.ok === true){
        return response.json();
    }

    throw new Error(response.statusText);
};

/*
description: build GET request to public api
             request built with no authorization headers
@path: string
@return: fetch promise
*/
export const publicRequest = (path) => {
    return fetch(path)
        .then(responseHandler);
};

/*
description: build request to authorized api
             request built with authorization headers
             response handled first to store authorization headers
             before passing on response result
@path: string
@method: string
@body: object
@return: fetch promise
*/
export const apiRequest = (path, method = "GET", body = {}) => {
    let data = { method: method };
    if (method !== "GET" && method !== "HEAD"){
        data.body = body;
    }

    return buildRequest()(path, data)
        .then(responseHeaders)
        .then(responseHandler);
};
