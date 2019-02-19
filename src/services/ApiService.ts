import ClientConfig from "../config/index";
import BaseHTTPService from './BaseHTTPService';
import {IHttp} from "./HttpClient";

export default class ApiService extends BaseHTTPService {
    constructor(relativeUrl: string, http?: IHttp) {
        super(`${ClientConfig.apiBaseHost}/${relativeUrl}`, http);
    }
}