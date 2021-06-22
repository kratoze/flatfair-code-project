/**
 * Class for a Unit. To be extended by OrganisationUnit. This class contains the relationships
 * (children, parent) a Unit can have with other Units and its configuration.
 */
export default class Unit {
  /**
   * Create a Unit.
   * @param {string} name - The name of the Unit.
   */
  constructor(name) {
    this.name = name;
    this.parent = null;
    this.children = [];
  }
  /**
   * Add the parent to this Unit. A Unit can only have one parent so calling addParent will
   * overrwrite the previous parent if there is one.
   *
   * @param {Unit} parent - The new parent of this unit
   */
  addParent(parent) {
    this.parent = parent;
  }
  /*
   * Add a child to this Unit. This metthod automatically assign this Unit as the child's
   * parent.
   *
   * @param {Unit} The child unit to be added to list of children
   */
  addChild(child) {
    this.children.push = child;
    child.parent = this;
  }
  /*
   * Add an array of children to this Unit. This method runs addChild for each element
   * in the passed array. Will automatically assign this Unit as each child's parent.
   */
  addChildren(children) {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        this.addChild(child);
      }, this);
    }
  }
  /**
   * Removes the given child from the Unit's list of children. Will set the given
   * child's parent to null.
   *
   * @param {Unit} child - The child to be removed.
   */
  removeChild(child) {
    let index = this.children.indexOf(child);
    this.children[index].parent = null;
    if (index > -1) this.children.splice(index, 1);
  }
}
