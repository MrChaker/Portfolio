import sendgrid, { ClientResponse } from "@sendgrid/mail";
export default class MailSender {
    /* private transporter ; */
    constructor(key: string){
        
        sendgrid.setApiKey(key) 
    }
    
    public sendMail = (name: any, email: any, message: any ): Promise<[ClientResponse, {}]> => {
        const msg = {
            from: 'mr.chakerw@gmail.com',
            to: 'mr.chakerw@gmail.com',
            subject: 'From portfolio ' + email,
	        text: message,
            html: '<p>'+ name +'</p>'
        };
    
        return sendgrid.send(msg)
    }
    
}