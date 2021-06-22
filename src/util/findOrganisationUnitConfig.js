import OrganisationUnit from '../classes/OrganisationUnit';

/**
 * Finds and returns the appropriate configuration of an Organisation Unit. If there is configuration
 * on the passed Unit, this function will look for configuration in its tree of parents.
 *
 * @param {OrganisationUnit} organisationUnit - The Organisation Unit to search for configuration.
 */
export default function findOrganistionConfig(organisationUnit) {
  console.log(organisationUnit);
  let config;
  if (organisationUnit.parent === null) {
    config = null;
  }
  if (organisationUnit.config !== null) {
    config = organisationUnit.config;
    return config;
  }

  return findOrganistionConfig(organisationUnit.parent);
}
