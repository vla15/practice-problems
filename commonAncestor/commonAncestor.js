
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */




var Tree = function() {
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(childOne, childTwo) {
  // TODO: implement me!
  var pathOne = this.getAncestorPath(childOne);
  if (!pathOne) {
    return null;
  }

  var pathTwo = this.getAncestorPath(childTwo);
  if (!pathTwo) {
    return null;
  }

  var pathLen = Math.min(pathOne.length, pathTwo.length);
  var commonAncestor = this;
  for (var i = 0; i < pathLen; i++) {
    if (pathOne[i] === pathTwo[i]) {
      commonAncestor = pathOne[i]
    }
  }
  return commonAncestor;
}

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(child, ancestors) {

  //basically recurse down the tree until you find child node
  var ancestors = ancestors || [];
  if (this === child) {
    ancestors.unshift(this);
    return ancestors;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].getAncestorPath(child, ancestors)) {
      ancestors.unshift(this);
      return ancestors;
    }
  }
  return null
}
  //if you did then you return from there
  //back to beginning and unshifting the values into an array as you go backwards

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

//grandma
//mom
//me bro

var grandma = new Tree();
var mom = new Tree();
grandma.addChild(mom);
var me = new Tree();
mom.addChild(me);
var bro = new Tree();
mom.addChild(bro);

console.log(grandma.getClosestCommonAncestor(me, bro));
console.log(grandma.getAncestorPath(me));
