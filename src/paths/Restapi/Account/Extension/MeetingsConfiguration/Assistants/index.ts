import {AssistantsResource} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Assistants {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/assistants`;
  }

  /**
   * Operation: Get Assistants
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants
   */
  async get(): Promise<AssistantsResource> {
    const r = await this.rc.get<AssistantsResource>(this.path());
    return r.data;
  }
}

export default Assistants;
