import MessageChanges from './MessageChanges'

class MessageEventBody
{
    /// <summary>
    /// Internal identifier of an extension
    /// </summary>
    extensionId: string

    /// <summary>
    /// Datetime when the message was last modified in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    lastUpdated: string

    /// <summary>
    /// Message Changes
    /// </summary>
    changes: MessageChanges[]

    /// <summary>
    /// Internal identifier of a subscription owner extension
    /// </summary>
    ownerId: string
}

export default MessageEventBody