import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/unarchive`
  }

  /**
   * Operation: Unarchive Team
   * Http post /restapi/v1.0/glip/teams/{chatId}/unarchive
   */
  async post(): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Index
