import CallersInfoRequest from './CallersInfoRequest'
import CalledNumberInfo from './CalledNumberInfo'
import ScheduleInfo from './ScheduleInfo'
import ForwardingInfo from './ForwardingInfo'
import UnconditionalForwardingInfo from './UnconditionalForwardingInfo'
import QueueInfo from './QueueInfo'
import TransferredExtensionInfo from './TransferredExtensionInfo'
import VoicemailInfo from './VoicemailInfo'
import GreetingInfo from './GreetingInfo'

class CreateAnsweringRuleRequest
{
    /// <summary>
    /// Specifies if the rule is active or inactive. The default value is 'True'
    /// </summary>
    enabled: boolean

    /// <summary>
    /// Type of an answering rule. The 'Custom' value should be specified
    /// Required
    /// </summary>
    type: string

    /// <summary>
    /// Name of an answering rule specified by user
    /// Required
    /// </summary>
    name: string

    /// <summary>
    /// Answering rule will be applied when calls are received from the specified caller(s)
    /// </summary>
    callers: CallersInfoRequest[]

    /// <summary>
    /// Answering rules are applied when calling to selected number(s)
    /// </summary>
    calledNumbers: CalledNumberInfo[]

    /// <summary>
    /// Schedule when an answering rule should be applied
    /// </summary>
    schedule: ScheduleInfo

    /// <summary>
    /// Specifies how incoming calls are forwarded
    /// Enum: ForwardCalls, UnconditionalForwarding, AgentQueue, TransferToExtension, TakeMessagesOnly, PlayAnnouncementOnly
    /// </summary>
    callHandlingAction: string

    /// <summary>
    /// Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded
    /// </summary>
    forwarding: ForwardingInfo

    /// <summary>
    /// Unconditional forwarding parameters. Returned if 'UnconditionalForwarding' is specified in 'callHandlingAction'
    /// </summary>
    unconditionalForwarding: UnconditionalForwardingInfo

    /// <summary>
    /// Queue settings applied for department (call queue) extension type, with the 'AgentQueue' value specified as a call handling action
    /// </summary>
    queue: QueueInfo

    /// <summary>
    /// Transfer settings applied for department (call queue) extension type, with 'TransferToExtension' call handling action
    /// </summary>
    transfer: TransferredExtensionInfo

    /// <summary>
    /// Specifies whether to take a voicemail and who should do it
    /// </summary>
    voicemail: VoicemailInfo

    /// <summary>
    /// Greetings applied for an answering rule; only predefined greetings can be applied, see Dictionary Greeting List
    /// </summary>
    greetings: GreetingInfo[]

    /// <summary>
    /// Call screening status. 'Off' - no call screening; 'NoCallerId' - if caller ID is missing, then callers are asked to say their name before connecting; 'UnknownCallerId' - if caller ID is not in contact list, then callers are asked to say their name before connecting; 'Always' - the callers are always asked to say their name before connecting. The default value is 'Off'
    /// Enum: Off, NoCallerId, UnknownCallerId, Always
    /// </summary>
    screening: string
}

export default CreateAnsweringRuleRequest