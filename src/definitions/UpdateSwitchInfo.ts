import {SwitchSiteInfo, LocationUpdatesEmergencyAddressInfoRequest} from '.';

class UpdateSwitchInfo {
  /**
   * internal identifier of a switch
   */
  id?: string;

  /**
   * Unique identifier of a network switch. The supported formats are: XX:XX:XX:XX:XX:XX (symbols 0-9 and A-F) for MAC address and X.X.X.X for IP address (symbols 0-255)
   */
  chassisId?: string;

  /**
   * Name of a network switch
   */
  name?: string;

  /**
   * Site data
   */
  site?: SwitchSiteInfo;

  /**
   * Emergency address assigned to the switch. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
   */
  emergencyAddress?: LocationUpdatesEmergencyAddressInfoRequest;

  /**
   * Emergency response location (address) internal identifier. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
   */
  emergencyLocationId?: string;
}

export default UpdateSwitchInfo;
