

describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://suninjuly.github.io/math.html')
  
      // Вводим данные в поле поиска;
      cy.get('[id="input_value"]').then(($span) => {
        const x = parseInt($span.text());
        const f = Math.log(Math.abs(12*Math.sin(x)));

        cy.get("input[id=answer]").type(f);

        cy.get("input[id=robotCheckbox").click()
        cy.get("input[id=robotsRule").click()
        cy.get("button").contains('Submit').click()
      });


      // Нажимаем на кнопку "Найти"
      cy.contains('[data-testid="header__search-button--desktop"]', 'Найти').click()
  
      // Кликаем на изображение
      cy.get('img[itemprop="image"][alt="Тестирование JavaScript"]').click()
  
      // Проверяем содержание текста по заголовку
      cy.contains('h1[itemprop="name"].BookCard-module__book__mainInfo__title_2zz4M', 'Тестирование JavaScript')
    })
  })
  