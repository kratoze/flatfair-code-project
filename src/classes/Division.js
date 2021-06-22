import OrganisationUnit from '../classes/OrganisationUnit';

export default class Division extends OrganisationUnit {
  /**
   * Create a new Division
   *
   * @param {string} - The name of this Area
   * @param {Object} config - The configuration of this Unit.
   * @param {boolean} config.hasFixedMembershipFee=false - If the membership fee should be applied.
   * @param {Number} config.fixedMembershipFeeAmount=0 - The fixed membership fee.
   */
  constructor(name, config) {
    super(name, config);
  }

  addParent(parent) {
    throw new Error('Division cannot have a parent');
  }

  addChild(child) {
    if (child instanceof Area) {
      super.addChild(child);
    }
  }
}
