// import 'babel-polyfill';
import fetch from "cross-fetch";
import fetchDefaults from "fetch-defaults";
import Cookie from "js-cookie";

export const ROOT_URL = "";
export const AUTH_URL = "";
export const API_URL = "/v1";

export const buildApiRequest = () => (
    fetchDefaults(fetch, ROOT_URL, {
        headers: Object.assign({
            //
        }, Cookie.getJSON().authHeaders)
    })
);

export const apiRequest = (path, method = "GET", body = {}) => {
    let data = { method: method };
    if (method !== "GET" && method !== "HEAD"){
        data.body = body;
    }

    return buildApiRequest()(path, data).then((response) => {
        Cookie.set("authHeaders", {
            "access-token": response.headers.map["access-token"],
            "token-type": response.headers.map["token-type"],
            "client": response.headers.map["client"],
            "expiry": response.headers.map["expiry"],
            "uid": response.headers.map["uid"]
        });

        return response.json();
    });
};
