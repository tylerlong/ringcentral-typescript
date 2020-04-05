class SyncUserCallLogParameters
{
    /// <summary>
    /// Type of synchronization
    /// </summary>
    syncType: string[]

    /// <summary>
    /// Value of syncToken property of last sync request response
    /// </summary>
    syncToken: string

    /// <summary>
    /// The start datetime for resulting records in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601] format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is the current moment
    /// </summary>
    dateFrom: string

    /// <summary>
    /// For 'FSync' the parameter is mandatory, it limits the number of records to be returned in response. For 'ISync' it specifies with how many records to extend sync Frame to the past, the maximum number of records is 250
    /// </summary>
    recordCount: number

    /// <summary>
    /// Type of calls to be returned. The default value is 'All'
    /// </summary>
    statusGroup: string[]

    /// <summary>
    /// View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync
    /// Default: Simple
    /// Enum: Simple, Detailed
    /// </summary>
    view: string

    /// <summary>
    /// Supported for ISync. If 'True' then deleted call records are returned
    /// </summary>
    showDeleted: boolean
}

export default SyncUserCallLogParameters