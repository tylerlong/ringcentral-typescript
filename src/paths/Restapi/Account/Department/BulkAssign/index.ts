import DepartmentBulkAssignResource from '../../../../../definitions/DepartmentBulkAssignResource'
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
    return `${this.parent.path()}/bulk-assign`
  }

  /**
   * Operation: Assign Multiple Department Members
   * Http post /restapi/v1.0/account/{accountId}/department/bulk-assign
   */
  async post(DepartmentBulkAssignResource departmentBulkAssignResource): Promise<string> {
    return this.rc.post(this.path(), departmentBulkAssignResource)
  }
}

export default Index