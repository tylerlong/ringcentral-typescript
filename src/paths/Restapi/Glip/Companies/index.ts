import { GlipCompany } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Companies {
  rc: RestClient
  companyId: (string | null)
  parent: Parent

  constructor (parent: Parent, companyId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.companyId = companyId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.companyId !== null) {
      return `${this.parent.path()}/companies/${this.companyId}`
    }

    return `${this.parent.path()}/companies`
  }

  /**
   * Operation: Get Company Info
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/companies/{companyId}
   */
  async get (): Promise<GlipCompany> {
    if (this.companyId === null) {
      throw new Error('companyId must be specified.')
    }

    return this.rc.get(this.path())
  }
}

export default Companies
