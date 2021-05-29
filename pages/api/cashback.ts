import type { NextApiRequest, NextApiResponse } from 'next'
const sgMail = require('@sendgrid/mail')

console.log(process.env.SENDGRID_API_KEY)

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'gaponenko.mm@gmail.com', // Change to your recipient
  from: 'ghostelh@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log(process.env.SENDGRID_API_KEY)
        await sgMail.send(msg)

        res.status(200).json({ name: 'John Doe' })
    } catch (e) {
        console.error(e)
        res.status(500)
    }
}