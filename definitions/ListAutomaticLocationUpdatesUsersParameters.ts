class ListAutomaticLocationUpdatesUsersParameters
{
    /// <summary>
    /// Extension type. Multiple values are supported
    /// Enum: User, Limited
    /// </summary>
    type: string

    /// <summary>
    /// Filters entries containing the specified substring in user name, extension or department. The characters range is 0-64; not case-sensitive. If empty then the filter is ignored
    /// </summary>
    searchString: string

    /// <summary>
    /// Department name to filter the users. The value range is 0-64; not case-sensitive. If not specified then the parameter is ignored. Multiple values are supported
    /// </summary>
    department: string

    /// <summary>
    /// Internal identifier of a site. To filter users of Main Site (Company) `main-site` must be specified. Supported only If Multi-Site feature is enabled for the account. Multiple values are supported
    /// </summary>
    siteId: string

    /// <summary>
    /// Filters entries by their status of Automatic Location Updates feature
    /// </summary>
    featureEnabled: boolean

    /// <summary>
    /// Comma-separated list of fields to order results prefixed by plus sign '+' (ascending order) or minus sign '-' (descending order). Supported values: 'name', 'modelName', 'siteName', 'featureEnabled'
    /// Default: name
    /// </summary>
    orderBy: string

    /// <summary>
    /// Indicates the page size (number of items). The values supported: `Max` or numeric value. If not specified, 100 records are returned per one page
    /// </summary>
    perPage: number

    /// <summary>
    /// Indicates the page number to retrieve. Only positive number values are supported
    /// Default: 1
    /// </summary>
    page: number
}

export default ListAutomaticLocationUpdatesUsersParameters