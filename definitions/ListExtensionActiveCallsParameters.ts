class ListExtensionActiveCallsParameters
{
    /// <summary>
    /// The direction for the result records. If not specified, both inbound and outbound records are returned. Multiple values are accepted
    /// </summary>
    direction: string[]

    /// <summary>
    /// View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync
    /// Default: Simple
    /// Enum: Simple, Detailed
    /// </summary>
    view: string

    /// <summary>
    /// Call type of a record. If not specified, all call types are returned. Multiple values are accepted
    /// </summary>
    type: string[]

    /// <summary>
    /// Indicates the page number to retrieve. Only positive number values are allowed
    /// Default: 1
    /// </summary>
    page: number

    /// <summary>
    /// Indicates the page size (number of items)
    /// Default: 100
    /// </summary>
    perPage: number
}

export default ListExtensionActiveCallsParameters