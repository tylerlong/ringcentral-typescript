import FormData from 'form-data'

import { Attachment } from './definitions'

class Utils {
  static getFormData(...objs: any[]): FormData {
    const formData = new FormData({})
    const obj = Object.assign({}, ...objs)
    const jsonRequest: any = {}
    const attachments: Attachment[] = []
    for(const key of Object.keys(obj)) {
      let value = obj[key]
      if(value === undefined || value === null) {
        continue
      }
      if(Attachment.isAttachment(value)) {
        attachments.push(value)
      }
      if (Array.isArray(value) && Attachment.isAttachment(value[0])) {
        attachments.push(...value)
      } else {
        jsonRequest[key] = value
      }
    }
    formData.append('files[]', JSON.stringify(jsonRequest), {
      filename: 'request.json',
      contentType: 'application/json'
    })
    for(const attachment of attachments) {
      formData.append('files[]', attachment.content, {
        filename: attachment.filename,
        contentType: attachment.contentType,
      })
    }
    return formData
  }
}

export default Utils
