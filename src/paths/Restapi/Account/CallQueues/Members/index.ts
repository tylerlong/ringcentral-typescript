import { CallQueueMembers, ListCallQueueMembersParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Members {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/members`
  }

  /**
   * Operation: Get Call Queue Members
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/call-queues/{groupId}/members
   */
  async get (queryParams?: ListCallQueueMembersParameters): Promise<CallQueueMembers> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Members
