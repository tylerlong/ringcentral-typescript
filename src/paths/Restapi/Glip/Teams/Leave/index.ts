import Parent from '..';
import RingCentral from '../../../../..';

class Leave {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/leave`;
  }

  /**
   * Operation: Leave Team
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/teams/{chatId}/leave
   */
  async post(): Promise<string> {
    const r = await this.rc.post<string>(this.path());
    return r.data;
  }
}

export default Leave;
