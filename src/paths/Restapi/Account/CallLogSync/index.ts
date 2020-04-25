import { AccountCallLogSyncResponse, SyncAccountCallLogParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class CallLogSync {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/call-log-sync`
  }

  /**
   * Operation: Sync Company Call Log
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/call-log-sync
   */
  async get (queryParams?: SyncAccountCallLogParameters): Promise<AccountCallLogSyncResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default CallLogSync
