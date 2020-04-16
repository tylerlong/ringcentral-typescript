import Suspend from './Suspend'
import Activate from './Activate'
import GlipWebhookList from '../../../../definitions/GlipWebhookList'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  webhookId: string
  parent: Parent

  constructor(parent: Parent, webhookId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.webhookId = webhookId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.webhookId !== null) {
      return `${this.parent.path()}/webhooks/${this.webhookId}`
    }

    return `${this.parent.path()}/webhooks`
  }

  /**
   * Operation: Get Webhooks
   * Http get /restapi/v1.0/glip/webhooks
   */
  async list(): Promise<GlipWebhookList> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Get Webhook
   * Http get /restapi/v1.0/glip/webhooks/{webhookId}
   */
  async get(): Promise<GlipWebhookList> {
    if (this.webhookId === undefined || this.webhookId === null) {
      throw new Error("webhookId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Delete Webhook
   * Http delete /restapi/v1.0/glip/webhooks/{webhookId}
   */
  async delete(): Promise<string> {
    if (this.webhookId === undefined || this.webhookId === null) {
      throw new Error("webhookId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }

  activate(): Activate {
    return new Activate(this)
  }

  suspend(): Suspend {
    return new Suspend(this)
  }
}

export default Index
