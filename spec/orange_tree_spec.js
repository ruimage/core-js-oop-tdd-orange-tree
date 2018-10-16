describe("OrangeTree", () => {

  let tree;

  beforeEach(() => {
    tree = new OrangeTree();
  });


  // You'll need to switch `xdescribe( o `describe` when you're ready
  //  to implement each set of tests.

  xdescribe("age", () => {
    it("has an age", () => {

    });
  });

  xdescribe("height", () => {
    it("has a height", () => {

    });
  });


  xdescribe("passGrowingSeason", () => {
    it("should change the tree age", () => {

    });

    it("should make the tree grow", () => {
      // This should be more explicit. How much should the tree grow?
    });

    // If the tree is old enough to bear fruit
    it("should cause the tree to produce oranges", () => {

    });

  });

  xdescribe("isMature", () => {
    it("returns true if tree is old enough to bear fruit", () => {

    });

    it("returns false if tree is not old enough to bear fruit", () => {

    });
  });

  xdescribe("isDead", () => {
    it("should return false for an alive tree", () => {

    });

    it("should return true for a dead tree", () => {

    });
  });

  xdescribe("hasOranges", () => {
    it("should return true if oranges are on the tree", () => {

    });

    it("should return false if the tree has no oranges", () => {

    });
  });

  xdescribe("pick_an_orange", () => {
    it("should return an orange from the tree", () => {

    });

    it("the returned orange should no longer be on the tree", () => {

    });

    it("should raise an error if the tree has no oranges", () => {

    });
  });
});
