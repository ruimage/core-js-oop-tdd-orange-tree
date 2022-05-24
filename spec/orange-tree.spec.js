const OrangeTree = require('../orange-tree');

// Test-Driven Development
describe('OrangeTree', () => {
  let tree;

  beforeEach(() => {
    tree = new OrangeTree();
  });

  describe('age', () => {
    test('has an age', () => {
      expect(tree.hasOwnProperty('age')).toEqual(true);
    });
  });

  describe('height', () => {
    test('has a height', () => {
      expect(tree.hasOwnProperty('age')).toEqual(true);
    });
  });

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты.
  describe('passGrowingSeason', () => {
    test('should change the tree age', () => {
      tree.age = 5;
      const pastAge = tree.age;
      tree.passGrowingSeason();
      const currAge = tree.age;
      expect(currAge - pastAge).toEqual(1);
    });

    test('should make the tree grow', () => {
      tree.age = 5;
      const pastAge = tree.age;
      tree.passGrowingSeason();
      tree.passGrowingSeason();
      const currAge = tree.age;
      expect(currAge - pastAge).toEqual(2);
    });

    // If the tree is old enough to bear fruit
    xtest('should cause the tree to produce oranges', () => {

    });
  });

  describe('isMature', () => {
    test('returns true if tree is old enough to bear fruit', () => {
      tree = new OrangeTree(7);
      expect(tree.isMature()).toEqual(true);
    });

    test('returns false if tree is not old enough to bear fruit', () => {
      tree = new OrangeTree(3);
      expect(tree.isMature()).toEqual(false);
    });
  });

  xdescribe('isDead', () => {
    test('should return false for an alive tree', () => {
      tree = new OrangeTree(3);
      expect(tree.isDead()).toEqual(false);
    });

    test('should return true for a dead tree', () => {
      tree = new OrangeTree(100);
      expect(tree.isDead()).toEqual(true);
    });
  });

  xdescribe('hasOranges', () => {
    test('should return true if oranges are on the tree', () => {
      tree = new OrangeTree(20);
      tree.passGrowingSeason();
      expect(tree.hasOranges()).toEqual(true);
    });

    test('should return false if the tree has no oranges', () => {
      tree = new OrangeTree(20);
      expect(tree.hasOranges()).toEqual(false);
    });
  });

  xdescribe('pickAnOrange', () => {
    test('should return an orange from the tree', () => {
      tree = new OrangeTree(20);
      tree.passGrowingSeason();
      const orange = tree.pickAnOrange();
      expect(orange).toBeInstanceOf(OrangeTree);
    });

    test('the returned orange should no longer be on the tree', () => {
      tree = new OrangeTree(20);
      tree.passGrowingSeason();
      const orange = tree.pickAnOrange();
      expect(tree.orangesOnTree.indexOf(orange)).toEqual(-1);
    });

    test('should raise an error if the tree has no oranges', () => {
      expect(tree.pickAnOrange()).toThrowError('This tree has no oranges');
    });
  });
});
