const { orangeModule } = require('./orange');
const { orangeTreeModule } = require('./orange_tree');

let orange = new orangeModule();
let tree = new orangeTreeModule();
console.log(orange);

// Let seasons pass until the tree is ready to bear fruit.
while (!tree.isMature()) {
  tree.passGrowingSeason();
}

// # Report yearly harvest information for the lifetime of the tree.
while (!tree.isDead()) {
  tree.passGrowingSeason();
  harvestedOranges = [];

  while (tree.hasOranges()) {
    harvestedOranges.push(tree.pickAnOrange());
  }

  // average_orange_diameter = # Need to calculate the average diameter for this harvest.

  console.log(
    `
    HARVEST_REPORT
    YEAR ${tree.age} REPORT
    -----------------------
    Height: ${tree.height} feet.
    Harvest: ${harvestedOranges.length} oranges with an average
    diameter of ${averageOrangeDiameter} inches.
    `,
  );
}

console.log('Alas, the tree, she is dead!');
