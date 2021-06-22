import organisationUnit from '../classes/OrganisationUnit';

export default class Branch extends OrganisationUnit {
  /**
   * Create a new Branch
   *
   * @param {string} - The name of this Branch
   * @param {Object} config - The configuration of this Unit.
   * @param {boolean} config.hasFixedMembershipFee=false - If the membership fee should be applied.
   * @param {Number} config.fixedMembershipFeeAmount=0 - The fixed membership fee.
   */
  constructor(name, config) {
    super(name, config);
  }

  addParent(parent) {
    if (parent instanceof Area) {
      super.addParent(parent);
    }
  }

  addChild(child) {
    throw new Error('A Branch cannot have children');
  }
}
