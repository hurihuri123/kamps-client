import ClientConfig from '../config/index';
import User from '../models/User';
import BaseHTTPService from './BaseHTTPService';

export interface LoginWithMailReponse {
    error?: boolean;
    errMsg?: string;
    user?: User;
}

class AuthService extends BaseHTTPService {

}


export default new AuthService(ClientConfig.authBaseApi);