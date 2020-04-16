import ListDepartmentMembersParameters from '../../../../../definitions/ListDepartmentMembersParameters'
import DepartmentMemberList from '../../../../../definitions/DepartmentMemberList'
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
    return `${this.parent.path()}/members`
  }

  /**
   * Operation: Get Department Member List
   * Http get /restapi/v1.0/account/{accountId}/department/{departmentId}/members
   */
  async get(queryParams?: ListDepartmentMembersParameters): Promise<DepartmentMemberList> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
