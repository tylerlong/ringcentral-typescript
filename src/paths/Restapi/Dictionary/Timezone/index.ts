import GetTimezoneInfoResponse from '../../../../definitions/GetTimezoneInfoResponse'
import GetTimezoneListResponse from '../../../../definitions/GetTimezoneListResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  timezoneId: string
  parent: Parent

  constructor(parent: Parent, timezoneId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.timezoneId = timezoneId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.timezoneId != null) {
      return `${this.parent.path()}/timezone/${this.timezoneId}`
    }

    return `${this.parent.path()}/timezone`
  }

  /**
   * Operation: Get Timezone List
   * Http get /restapi/v1.0/dictionary/timezone
   */
  async list(ListTimezonesParameters queryParams = null): Promise<GetTimezoneListResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Timezone
   * Http get /restapi/v1.0/dictionary/timezone/{timezoneId}
   */
  async get(ReadTimezoneParameters queryParams = null): Promise<GetTimezoneInfoResponse> {
    if (!this.timezoneId || this.timezoneId === null) {
      throw new Error("timezoneId must not be undefined or null")
    }

    return this.rc.get(this.path(), queryParams)
  }
}

export default Index