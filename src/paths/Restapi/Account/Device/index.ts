import { GetDeviceInfoResponse, ReadDeviceParameters, DeviceResource, AccountDeviceUpdate } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Device {
  rc: RestClient
  deviceId: string
  parent: Parent

  constructor(parent: Parent, deviceId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.deviceId = deviceId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.deviceId) {
      return `${this.parent.path()}/device/${this.deviceId}`
    }

    return `${this.parent.path()}/device`
  }

  /**
   * Operation: Get Device
   * Http get /restapi/v1.0/account/{accountId}/device/{deviceId}
   */
  async get(queryParams?: ReadDeviceParameters): Promise<GetDeviceInfoResponse> {
    if (!this.deviceId) {
      throw new Error('deviceId must not be undefined')
    }

    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Update Device
   * Http put /restapi/v1.0/account/{accountId}/device/{deviceId}
   */
  async put(accountDeviceUpdate: AccountDeviceUpdate): Promise<DeviceResource> {
    if (!this.deviceId) {
      throw new Error('deviceId must not be undefined')
    }

    return this.rc.put(this.path(), accountDeviceUpdate)
  }
}

export default Device
