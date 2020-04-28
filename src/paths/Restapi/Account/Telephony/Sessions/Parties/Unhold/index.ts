import { CallParty } from '../../../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../../../..'

class Unhold {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/unhold`
  }

  /**
   * Operation: Unhold Call Party
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/unhold
   */
  async post (): Promise<CallParty> {
    const r = await this.rc.post(this.path())
    return r.data
  }
}

export default Unhold
