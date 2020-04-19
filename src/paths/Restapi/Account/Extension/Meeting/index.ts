import End from './End'
import ServiceInfo from './ServiceInfo'
import { MeetingsResource, MeetingResponseResource, MeetingRequestResource } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Meeting {
  rc: RestClient
  meetingId: string
  parent: Parent

  constructor(parent: Parent, meetingId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.meetingId = meetingId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.meetingId) {
      return `${this.parent.path()}/meeting/${this.meetingId}`
    }

    return `${this.parent.path()}/meeting`
  }

  /**
   * Operation: Get Scheduled Meetings
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting
   */
  async list(): Promise<MeetingsResource> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Create Meeting
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting
   */
  async post(meetingRequestResource: MeetingRequestResource): Promise<MeetingResponseResource> {
    return this.rc.post(this.path(false), meetingRequestResource)
  }

  /**
   * Operation: Get Meeting Info
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}
   */
  async get(): Promise<MeetingResponseResource> {
    if (!this.meetingId) {
      throw new Error('meetingId must not be undefined')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Meeting
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}
   */
  async put(meetingRequestResource: MeetingRequestResource): Promise<MeetingResponseResource> {
    if (!this.meetingId) {
      throw new Error('meetingId must not be undefined')
    }

    return this.rc.put(this.path(), meetingRequestResource)
  }

  /**
   * Operation: Delete Meeting
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}
   */
  async delete(): Promise<string> {
    if (!this.meetingId) {
      throw new Error('meetingId must not be undefined')
    }

    return this.rc.delete(this.path())
  }

  serviceInfo(): ServiceInfo {
    return new ServiceInfo(this)
  }

  end(): End {
    return new End(this)
  }
}

export default Meeting
