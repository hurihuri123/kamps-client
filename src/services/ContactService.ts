
import BaseHTTPService from './BaseHTTPService';
import {Logger} from 'nofshonit-base-web-client';
import ClientConfig from '../config/index';

class ContactService extends BaseHTTPService{

    constructor(){
        super(ClientConfig.apiBaseHost);
    }

    sendContactRequest(fullName:string ,phoneNumber: string, description:string ,email:string){
        // Variable Definition
        const body = {
            subject: "hey",
            fullName:fullName,
            phoneNumber:phoneNumber,
            description:description,
            email:email
        };

        // Code Section
       return this.httpPost('/api/contact/openService',body)
    
    }
}
export default new ContactService();