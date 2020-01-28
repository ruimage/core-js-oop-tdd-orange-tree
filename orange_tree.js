class OrangeTree {
  passGrowingSeason() {}

  //  Returns true if the tree is old enough to bear fruit (6), false otherwise
  isMature() {}

  //  Returns +true+ if there are any oranges on the tree, +false+ otherwise
  hasOranges() {}

  //  Returns an Orange if there are any
  //  Raises a NoOrangesError otherwise
  pickAnOrange() {
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
  }

  //  orange-picking logic goes here
}

module.exports = { OrangeTree };
