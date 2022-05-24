// const Orange = require("./orange");
// const OrangeTree = require("./orange-tree");

const orange = new Orange();
const tree = new OrangeTree();
const reportsBlock = document.getElementById('reports');

// Let seasons pass until the tree is ready to bear fruit.
while (!tree.isMature()) {
  tree.passGrowingSeason();
}

// Report yearly harvest information for the lifetime of the tree.
while (!tree.isDead()) {
  tree.passGrowingSeason();
  const harvestedOranges = [];

  while (tree.hasOranges()) {
    harvestedOranges.push(tree.pickAnOrange());
  }

  const averageOrangeDiameter = (harvestedOranges.reduce((acc, cur) => acc += cur.diameter, 0) / harvestedOranges.length).toFixed(2);

  const report = document.createElement('div');
  report.innerHTML = `
      <b>HARVEST_REPORT</b>
      <br/>
      YEAR ${tree.age} REPORT
      <br/>
      Height: ${tree.height} feet.
      <br/>
      Harvest: ${harvestedOranges.length} oranges with an average
      <br/>
      diameter of ${averageOrangeDiameter} inches.
      <br/>
      <br/>
      -----------------------
      <br/>
      <br/>
    `;
  reportsBlock.appendChild(report);
}

const lastReport = document.createElement('div');
lastReport.innerHTML = '<h2>Alas, the tree, she is dead!</h2>';
reportsBlock.appendChild(lastReport);
