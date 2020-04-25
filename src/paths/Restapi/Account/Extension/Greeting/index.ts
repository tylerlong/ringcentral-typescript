import { CustomUserGreetingInfo, CreateCustomUserGreetingRequest } from '../../../../../definitions'
import Utils from '../../../../../Utils'
import Parent from '..'
import RestClient from '../../../../..'

class Greeting {
  rc: RestClient
  greetingId: (string | null)
  parent: Parent

  constructor (parent: Parent, greetingId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.greetingId = greetingId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.greetingId !== null) {
      return `${this.parent.path()}/greeting/${this.greetingId}`
    }

    return `${this.parent.path()}/greeting`
  }

  /**
   * Operation: Create Custom User Greeting
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting
   */
  async post (createCustomUserGreetingRequest: CreateCustomUserGreetingRequest): Promise<CustomUserGreetingInfo> {
    const formData = Utils.getFormData(createCustomUserGreetingRequest)
    return this.rc.post(this.path(false), formData, undefined, { headers: formData.getHeaders() })
  }

  /**
   * Operation: Get Custom Greeting
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}
   */
  async get (): Promise<CustomUserGreetingInfo> {
    if (this.greetingId === null) {
      throw new Error('greetingId must be specified.')
    }

    return this.rc.get(this.path())
  }
}

export default Greeting
