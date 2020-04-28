import Complete from './Complete'
import { GlipTaskInfo, GlipTaskList, GlipUpdateTask } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Tasks {
  rc: RestClient
  taskId: (string | null)
  parent: Parent

  constructor (parent: Parent, taskId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.taskId = taskId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this.parent.path()}/tasks/${this.taskId}`
    }

    return `${this.parent.path()}/tasks`
  }

  /**
   * Operation: Get Task
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/tasks/{taskId}
   */
  async get (): Promise<GlipTaskInfo> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.')
    }

    const r = await this.rc.get(this.path())
    return r.data
  }

  /**
   * Operation: Patch Task
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/glip/tasks/{taskId}
   */
  async patch (glipUpdateTask: GlipUpdateTask): Promise<GlipTaskList> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.')
    }

    const r = await this.rc.patch(this.path(), glipUpdateTask)
    return r.data
  }

  /**
   * Operation: Delete Task
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/tasks/{taskId}
   */
  async delete (): Promise<string> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.')
    }

    const r = await this.rc.delete(this.path())
    return r.data
  }

  complete (): Complete {
    return new Complete(this)
  }
}

export default Tasks
