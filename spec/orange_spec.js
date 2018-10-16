

describe("Orange", () => {
	let orange;

	beforeEach(() => {
  		orange = new Orange();
  	});

  it("has a diameter between 2.5 and 3.2", () => {
    desiredDiameterRange = [2.5, 3.2]
    expect(orange.diameter).toBeWithinRange(...desiredDiameterRange);
	});
});
