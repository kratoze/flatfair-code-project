import MEMBERSHIP_FEE_CONSTANTS from '../constants/MembershipFeeConstants';

/*
 * Calculates the VAT of a given amount
 *
 * @param {Number} amount - The amount for which VAT will be calculated
 * @return {Number} VAT - The calculated VAT
 */
export default function calculateVAT(amount) {
  return (amount / 100) * MEMBERSHIP_FEE_CONSTANTS.VAT_CONST;
}
