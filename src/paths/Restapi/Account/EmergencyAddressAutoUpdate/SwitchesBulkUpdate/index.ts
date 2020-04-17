import { UpdateMultipleSwitchesResponse, UpdateMultipleSwitchesRequest } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class SwitchesBulkUpdate {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/switches-bulk-update`
  }

  /**
   * Operation: Update Multiple Switches
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-update
   */
  async post(updateMultipleSwitchesRequest: UpdateMultipleSwitchesRequest): Promise<UpdateMultipleSwitchesResponse> {
    return this.rc.post(this.path(), updateMultipleSwitchesRequest)
  }
}

export default SwitchesBulkUpdate
