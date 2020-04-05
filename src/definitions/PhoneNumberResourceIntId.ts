import CountryResource from './CountryResource'
import PhoneNumberExtensionInfo from './PhoneNumberExtensionInfo'

class PhoneNumberResourceIntId
{
    /**
     * Internal identifier of a phone number
     */
    id?: number

    /**
     * Brief information on a phone number country
     */
    country?: CountryResource

    /**
     * Information on an extension to which the phone number is assigned
     */
    extension?: PhoneNumberExtensionInfo

    /**
     * Custom user name of a phone number, if any
     */
    label?: string

    /**
     * Location (City, State). Filled for local US numbers
     */
    location?: string

    /**
     * Payment type. 'External' is returned for forwarded numbers which are not terminated in the RingCentral phone system = ['External', 'TollFree', 'Local'],
     * Enum: External, TollFree, Local
     */
    paymentType?: string

    /**
     * Phone number
     */
    phoneNumber?: string

    /**
     * Status of a phone number. If the value is 'Normal', the phone number is ready to be used. Otherwise it is an external number not yet ported to RingCentral ,
     */
    status?: string

    /**
     * Enum: CompanyNumber, MainCompanyNumber, AdditionalCompanyNumber, DirectNumber, CompanyFaxNumber, ForwardedNumber, ForwardedCompanyNumber, ContactCenterNumber
     */
    usageType?: string

    /**
     * Type of a phone number
     * Enum: VoiceFax, FaxOnly, VoiceOnly
     */
    type?: string

    /**
     * Internal identifier of a phone number reservation; encoded data including reservation type (by brand, by account, by session), particular brand/account/session data, and reservation date and time
     */
    reservationId?: string
}

export default PhoneNumberResourceIntId