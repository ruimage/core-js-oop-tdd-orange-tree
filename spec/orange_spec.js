const orange = require("../orange.js")

describe("Orange"){
	let orange;

	beforeEach(function() {
  		orange = new Orange();
  	});

  it("has a diameter between 2.5 and 3.2", function() {
    desiredDiameterRange = [2.5, 3.2]
    expect(orange.diameter).toBeWithinRange(...desiredDiameterRange);
  }
}
