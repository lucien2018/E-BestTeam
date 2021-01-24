'use strict'

require('dotenv').config();
const mailer = require('nodemailer');
const Mail = use('App/Models/Mail');
const smtpTransport = require('nodemailer-smtp-transport');
class ContactController {

    async envoyerMail ({ request }) {

       const data = request.post()
       
        await Mail.create(data)

        const transporter = mailer.createTransport (smtpTransport ({ 

          service: 'gmail', 
          hôte: 'smtp.gmail.com', 
          auth: {         
               user: 'process.env.EMAIL_USER',         
               pass: 'process.env.EMAIL_PASS'     
          } 
        })); 

        const from = request.only([ 'email']);
        const subject = request.only([ 'sujet']);
        const message = request.only([ 'messages']);
     
            const mailOptions = { 
            from: from, 
            to: 'ebestteam225@gmzil.com', 
            subject: subject, 
            html: message 
         };
        transporter.sendMail (mailOptions, function (error, info) { 
            if (error) { 
                console.log (error);   
            } else {      
                console.log ('Email sent:' + info.response);   
            }    
                }); 

    }
}

module.exports = ContactController
