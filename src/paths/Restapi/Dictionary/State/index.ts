import GetStateInfoResponse from '../../../../definitions/GetStateInfoResponse'
import GetStateListResponse from '../../../../definitions/GetStateListResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  stateId: string
  parent: Parent

  constructor(parent: Parent, stateId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.stateId = stateId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.stateId != null) {
      return `${this.parent.path()}/state/${this.stateId}`
    }

    return `${this.parent.path()}/state`
  }

  /**
   * Operation: Get States List
   * Http get /restapi/v1.0/dictionary/state
   */
  async list(ListStatesParameters queryParams = null): Promise<GetStateListResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get State
   * Http get /restapi/v1.0/dictionary/state/{stateId}
   */
  async get(): Promise<GetStateInfoResponse> {
    if (!this.stateId || this.stateId === null) {
      throw new Error("stateId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index