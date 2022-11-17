let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

//Describe o context

describe("unit testing for our dummy application", () => {
  context("Math with positive numbers", () => {
    //It - specify
    it("Should add positives numbers", () => {
      expect(add(1, 2)).to.eq(3);
    });
    it("Should subtract positives numbers", () => {
      expect(subtract(4, 2)).to.eq(2);
    });
    it("Should divide positives numbers", () => {
      expect(divide(1, 2)).to.eq(2);
    });
    it("Should multiply positives numbers", () => {
      expect(multiply(4, 2)).to.eq(8);
    });
  });

  context("Math with decimal numbers", () => {
    it("Should add decimal numbers", () => {
      expect(add(2.2, 2.2)).to.eq(4.4);
    });
    it("Should subtract decimal numbers", () => {
      expect(subtract(4.4, 2.2)).to.eq(2.2);
    });
    // it("Should divide decimal numbers", () => {
    //     expect(subtract(4.4, 2.2)).to.eq(2.2);
    // });
    // it("Should multiply decimal numbers", () => {
    //     expect(subtract(4.4, 2.2)).to.eq(2.2);
    // });
  });
});
