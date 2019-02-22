
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
            FullName:fullName,
            PhoneNumber:phoneNumber,
            Description:description,
            Email:email
        };

        // Code Section
       return this.httpPost('/api/contact/test',body)
    
    }
}
export default new ContactService();