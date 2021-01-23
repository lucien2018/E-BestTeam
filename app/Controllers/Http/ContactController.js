'use strict'

const Mail = use('Mail')

class ContactController {

    async store ({ request }) {
        const data = request.only(['nom', 'sujet','email','messages' ])
        //const user = await User.create(data)
    
        await Mail.send( data , (message) => {
          message
            .to('ebestteam225@gmail.com')
            .from('request.email')
        })
    
        return 'Registered successfully'
      }
}

module.exports = ContactController
