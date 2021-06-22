import OrganisationUnit from '../classes/OrganisationUnit';
import Division from './Division';

/**
 * Class for Area.
 * @extends OrganisationUnit
 * An Area can only have a parent of type Division and children of type Branch.
*/
export default class Area extends OrganisationUnit {
  /**
   * Create a new Area
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
    if (parent instanceof Division) {
      super.addParent(parent);
    }
  }

  addChild(child) {
    if (child instanceof Branch) {
      super.addChild(child);
    }
  }
