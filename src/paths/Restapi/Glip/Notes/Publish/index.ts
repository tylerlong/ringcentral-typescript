import Parent from '..'
import RestClient from '../../../../..'

class Publish {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/publish`
  }

  /**
   * Operation: Publish Note
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/notes/{noteId}/publish
   */
  async post (): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Publish
