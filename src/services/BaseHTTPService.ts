import {CancelToken} from 'axios';
import {Logger} from 'nofshonit-base-web-client';
import {AxiosHttp, IHttp} from "./HttpClient";

/**
 * Base class for HTTP handling
 * All service classes should be derived from this class
 */
class BaseHTTPService {

    http: IHttp;
    baseUrl: string;

    constructor(baseUrl: string, http?: IHttp) {
        if (!baseUrl) {
            throw new Error(`Erorr in creating Http service with baseUrl: ${baseUrl}`);
        }

        // Init baseUrl & http
        this.baseUrl = baseUrl;

        // Init IHttp
        if (http) {
            this.http = http;
        } else {
            this.http = new AxiosHttp();
        }
    }

    async httpGet(relativeUrl: string, queryString?: object, headers?: object) {
        const url = this.baseUrl + relativeUrl;
        try {
            return await this.http.get(url, queryString, headers);
        } catch (err) {
            Logger.warn(`get failed`, url);
        }
    }

    async httpPost(relativeUrl: string, body?: object, headers?: object) {
        const url = this.baseUrl + relativeUrl;
        try {
            const res = await this.http.post(url, body, headers);
            return res.data;
        } catch (err) {
            Logger.warn(`post failed`, url);
        }
    }

    httpPut(relativeUrl: string, body?: object, headers?: object) {
        return this.http.put(this.baseUrl + relativeUrl, body, headers);
    }

    httpDelete(relativeUrl: string, body?: object, headers?: object) {
        return this.http.del(this.baseUrl + relativeUrl, body, headers);
    }

    postFormData(relativeUrl: string, file: any) {
        return this.http.postFormData(this.baseUrl + relativeUrl, file);
    }

    updalodFile(relativeUrl: string, file: any, token: CancelToken) {
        return this.http.uploadFile(this.baseUrl + relativeUrl, file, token);
    }
}

export default BaseHTTPService;