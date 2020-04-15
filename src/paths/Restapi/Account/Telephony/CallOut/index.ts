import MakeCallOutRequest from '../../../../../definitions/MakeCallOutRequest'
import CallSession from '../../../../../definitions/CallSession'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/call-out`
  }

  /**
   * Operation: Make CallOut
   * Http post /restapi/v1.0/account/{accountId}/telephony/call-out
   */
  async post(MakeCallOutRequest makeCallOutRequest): Promise<CallSession> {
    return this.rc.post(this.path(), makeCallOutRequest)
  }
}

export default Index