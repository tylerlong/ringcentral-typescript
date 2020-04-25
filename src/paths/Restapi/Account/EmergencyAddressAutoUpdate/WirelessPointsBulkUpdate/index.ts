import { UpdateMultipleWirelessPointsResponse, UpdateMultipleWirelessPointsRequest } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class WirelessPointsBulkUpdate {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/wireless-points-bulk-update`
  }

  /**
   * Operation: Update Multiple Wireless Points
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-update
   */
  async post (updateMultipleWirelessPointsRequest: UpdateMultipleWirelessPointsRequest): Promise<UpdateMultipleWirelessPointsResponse> {
    return this.rc.post(this.path(), updateMultipleWirelessPointsRequest)
  }
}

export default WirelessPointsBulkUpdate
