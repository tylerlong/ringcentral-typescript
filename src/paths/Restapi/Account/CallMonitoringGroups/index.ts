import BulkAssign from './BulkAssign';
import Members from './Members';
import {
  CallMonitoringGroup,
  CreateCallMonitoringGroupRequest,
  ListCallMonitoringGroupsParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class CallMonitoringGroups {
  rc: RingCentral;
  groupId: string | null;
  parent: Parent;

  constructor(parent: Parent, groupId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.groupId = groupId;
  }

  path(withParameter = true): string {
    if (withParameter && this.groupId !== null) {
      return `${this.parent.path()}/call-monitoring-groups/${this.groupId}`;
    }

    return `${this.parent.path()}/call-monitoring-groups`;
  }

  /**
   * Operation: Create Call Monitoring Group
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/call-monitoring-groups
   */
  async post(
    createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest
  ): Promise<CallMonitoringGroup> {
    const r = await this.rc.post<CallMonitoringGroup>(
      this.path(false),
      createCallMonitoringGroupRequest
    );
    return r.data;
  }

  /**
   * Operation: Get Call Monitoring Groups List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/call-monitoring-groups
   */
  async get(
    queryParams?: ListCallMonitoringGroupsParameters
  ): Promise<CallMonitoringGroups> {
    const r = await this.rc.get<CallMonitoringGroups>(
      this.path(false),
      queryParams
    );
    return r.data;
  }

  /**
   * Operation: Updates Call Monitoring Group
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}
   */
  async put(
    createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest
  ): Promise<CallMonitoringGroup> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.');
    }

    const r = await this.rc.put<CallMonitoringGroup>(
      this.path(),
      createCallMonitoringGroupRequest
    );
    return r.data;
  }

  /**
   * Operation: Delete Call Monitoring Group
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}
   */
  async delete(): Promise<string> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path());
    return r.data;
  }

  members(): Members {
    return new Members(this);
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}

export default CallMonitoringGroups;
