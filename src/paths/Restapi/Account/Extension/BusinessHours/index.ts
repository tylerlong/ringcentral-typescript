import { GetUserBusinessHoursResponse, UserBusinessHoursUpdateResponse, UserBusinessHoursUpdateRequest } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class BusinessHours {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/business-hours`
  }

  /**
   * Operation: Get User Business Hours
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours
   */
  async get(): Promise<GetUserBusinessHoursResponse> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update User Business Hours
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours
   */
  async put(userBusinessHoursUpdateRequest: UserBusinessHoursUpdateRequest): Promise<UserBusinessHoursUpdateResponse> {
    return this.rc.put(this.path(), userBusinessHoursUpdateRequest)
  }
}

export default BusinessHours
