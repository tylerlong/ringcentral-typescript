import Parent from '..';
import RingCentral from '../../../../..';

class Publish {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/publish`;
  }

  /**
   * Operation: Publish Note
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/notes/{noteId}/publish
   */
  async post(): Promise<string> {
    const r = await this.rc.post<string>(this.path());
    return r.data;
  }
}

export default Publish;
