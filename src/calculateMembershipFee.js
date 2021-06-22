import MEMBERSHIP_FEE_CONSTANTS from './constants/MembershipFeeConstants';
import RentPeriodEnum from './constants/RentPeriodEnum';
import { calculateVAT, findOrganistionConfig } from './util';
import OrganisationUnit from './classes/OrganisationUnit';

import Area from './classes/Area';

function calculateMembershipFee(rentAmount, rentPeriod, organisationUnit) {
  // Rent amount must be an integer greater than 1
  if (typeof rentAmount !== 'number' && rentAmount <= 0) {
    throw new RangeError('rentAmount must be a positive integer');
  }

  if (rentPeriod === RentPeriodEnum.week && rentAmount < 2500) {
    throw new RangeError('rentAmount must be above £25 per week');
  } else if (rentPeriod === RentPeriodEnum.month && rentAmount < 11000) {
    throw new RangeError('rentAmount must be above £110 per month');
  }

  // Rent period must be either "MONTH" or "WEEK"
  if (!Object.values(RentPeriodEnum).includes(rentPeriod)) {
    throw new RangeError('Invalid rentPeriod, must be WEEK or MONTH');
  }
  // Check the correct Unit passed
  if (!organisationUnit instanceof OrganisationUnit) {
    throw new RangeError('organistionUnit must be of type OrganisationUnit');
  }

  const config = findOrganistionConfig(organisationUnit);

  let membershipFee, calculatedRentAmount;

  // Check if fixed membership fee is applied
  if (config.hasFixedMembershipFee) {
    membershipFee = config.fixedMembershipFeeAmount;
  } else {
    // Check if minimun fee is applied
    if (!Object.values(RentPeriodEnum).includes(rentPeriod)) {
      throw RangeError('Invalid rentPeriod');
    } else if (rentPeriod === RentPeriodEnum.week) {
      calculatedRentAmount = rentAmount;
    } else if (rentPeriod === RentPeriodEnum.month) {
      calculatedRentAmount = rentAmount / 4;
    }

    if (membershipFee < 120000) {
      membershipFee =
        MEMBERSHIP_FEE_CONSTANTS.MINIMUM_FEE +
        calculateVAT(MEMBERSHIP_FEE_CONSTANTS.MINIMUM_FEE);
    }

    membershipFee = calculatedRentAmount + calculateVAT(calculatedRentAmount);
  }

  return membershipFee;
}

let area = new Area('phil', {
  hasFixedMembershipFee: true,
  fixedMembershipFeeAmount: 90999,
});

let fee = calculateMembershipFee(10000, RentPeriodEnum.week, area);
console.log(fee);
