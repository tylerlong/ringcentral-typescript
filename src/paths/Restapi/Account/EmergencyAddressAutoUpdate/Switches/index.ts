import UpdateSwitchInfo from '../../../../../definitions/UpdateSwitchInfo'
import CreateSwitchInfo from '../../../../../definitions/CreateSwitchInfo'
import SwitchInfo from '../../../../../definitions/SwitchInfo'
import SwitchesList from '../../../../../definitions/SwitchesList'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  switchId: string
  parent: Parent

  constructor(parent: Parent, switchId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.switchId = switchId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.switchId != null) {
      return `${this.parent.path()}/switches/${this.switchId}`
    }

    return `${this.parent.path()}/switches`
  }

  /**
   * Operation: Get Account Switch List
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches
   */
  async list(ListAccountSwitchesParameters queryParams = null): Promise<SwitchesList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Switch
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches
   */
  async post(CreateSwitchInfo createSwitchInfo): Promise<SwitchInfo> {
    return this.rc.post(this.path(false), createSwitchInfo)
  }

  /**
   * Operation: Get Switch
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   */
  async get(): Promise<SwitchInfo> {
    if (!this.switchId || this.switchId === null) {
      throw new Error("switchId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Switch
   * Http put /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   */
  async put(UpdateSwitchInfo updateSwitchInfo): Promise<SwitchInfo> {
    if (!this.switchId || this.switchId === null) {
      throw new Error("switchId must not be undefined or null")
    }

    return this.rc.put(this.path(), updateSwitchInfo)
  }

  /**
   * Operation: Delete Switch
   * Http delete /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}
   */
  async delete(): Promise<string> {
    if (!this.switchId || this.switchId === null) {
      throw new Error("switchId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Index