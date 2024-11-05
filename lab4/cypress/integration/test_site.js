cy = require("cypress")
describe('Automatization for suninjuly math page', () => {
    it('Should calculate the function and submit the form', () => {
      cy.visit('http://suninjuly.github.io/math.html');
  
      cy.get('#input_value').then(($x) => {
        const x = $x.text();
  
        const calculate = (x) => {
          return String(Math.log(Math.abs(12 * Math.sin(Number(x)))));
        };
        const result = calculate(x);
        cy.get('#answer').type(result);
        cy.get('#robotCheckbox').check();
        cy.get('#robotsRule').check();
        cy.get('button[type="submit"]').click();
      });
    });
  });