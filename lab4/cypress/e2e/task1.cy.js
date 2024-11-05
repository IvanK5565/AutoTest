

describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://suninjuly.github.io/math.html')
  
      cy.get('#input_value').then(($span) => {
        const x = parseInt($span.text());
        const f = Math.log(Math.abs(12*Math.sin(x)));

        cy.get("#answer").type(f);

        cy.get("#robotCheckbox").click()
        cy.get('#robotsRule').check();
        cy.get('button[type="submit"]').click();
      });
    })
  })
  