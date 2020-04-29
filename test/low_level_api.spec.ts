/* eslint-env jest */
import fs from 'fs'
import path from 'path'

import RestClient from '../src/index'
import Utils from '../src/Utils'

jest.setTimeout(16000)

describe('low level API', () => {
  test('sms', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!!,
      server: process.env.RINGCENTRAL_SERVER_URL!!
    })
    await rc.authorize(process.env.RINGCENTRAL_USERNAME!, process.env.RINGCENTRAL_EXTENSION!, process.env.RINGCENTRAL_PASSWORD!)
    const r = await rc.post('/restapi/v1.0/account/~/extension/~/sms', {
      from: {
        phoneNumber: process.env.RINGCENTRAL_USERNAME!
      },
      to: [{
        phoneNumber: process.env.RINGCENTRAL_RECEIVER
      }],
      text: 'hello world'
    })
    const messageInfo = r.data
    expect(messageInfo).not.toBeUndefined()
    expect(messageInfo.id).not.toBeUndefined()
  })
  test('fax', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!!,
      server: process.env.RINGCENTRAL_SERVER_URL!!
    })
    await rc.authorize(process.env.RINGCENTRAL_USERNAME!, process.env.RINGCENTRAL_EXTENSION!, process.env.RINGCENTRAL_PASSWORD!)
    const requestBody = {
      to: [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER }],
      attachments: [
        {
          filename: 'test.txt',
          content: 'hello world',
          contentType: 'text/plain'
        },
        {
          filename: 'test.png',
          content: fs.createReadStream(path.join(__dirname, 'test.png')),
          contentType: 'image/png'
        }
      ]
    }
    const formData = Utils.getFormData(requestBody)
    const r = await rc.post('/restapi/v1.0/account/~/extension/~/fax', formData, undefined, { headers: formData.getHeaders() })
    const messageInfo = r.data
    expect(messageInfo).not.toBeUndefined()
    expect(messageInfo.id).not.toBeUndefined()
  })
})
