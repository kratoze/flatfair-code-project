import Unit from './Unit';

/**
 * A class for an Organisation Unit. An Organistion Unit has a name and a configuration.
 * This class is intended to be extended for each Unit in an organisation.
 * @extends Unit
 */
export default class OrganisationUnit extends Unit {
  /**
   * Create a new OrganisationUnit
   *
   * @param {string} - The name of this OrganisationUnit
   * @param {Object} config - The configuration of this Unit.
   * @param {boolean} config.hasFixedMembershipFee=false - If the membership fee should be applied.
   * @param {Number} config.fixedMembershipFeeAmount=0 - The fixed membership fee.
   */
  constructor(name, config) {
    super(name);
    this.config = this.createOrganisationUnitConfig(config);
  }

  /*
   * Creates the organistion unit configuration
   *
   * @param {Object} config - The configuration supplied to the Organisation Unit
   * @param {boolean} config.hasFixedMembershipFee=false - True if the fixed membershio fee is to be used
   * @param {Number} config.fixedMembershipFeeAmount=0 - The fixed membership fee amount
   */
  createOrganisationUnitConfig({
    hasFixedMembershipFee = false,
    fixedMembershipFeeAmount = 0,
  }) {
    if (typeof hasFixedMembershipFee !== 'boolean')
      throw new TypeError('hasFixedMembershipFee must be a boolean');
    if (typeof fixedMembershipFeeAmount !== 'number')
      throw new TypeError('Membership fee amount must be a number');
    return {
      hasFixedMembershipFee,
      fixedMembershipFeeAmount,
    };
  }
}

new OrganisationUnit();
