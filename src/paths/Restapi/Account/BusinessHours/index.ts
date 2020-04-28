import { CompanyBusinessHours, CompanyBusinessHoursUpdateRequest } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class BusinessHours {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/business-hours`
  }

  /**
   * Operation: Get Company Business Hours
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/business-hours
   */
  async get (): Promise<CompanyBusinessHours> {
    const r = await this.rc.get(this.path())
    return r.data
  }

  /**
   * Operation: Update Company Business Hours
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/business-hours
   */
  async put (companyBusinessHoursUpdateRequest: CompanyBusinessHoursUpdateRequest): Promise<CompanyBusinessHours> {
    const r = await this.rc.put(this.path(), companyBusinessHoursUpdateRequest)
    return r.data
  }
}

export default BusinessHours
