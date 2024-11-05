const { Builder, By, Key, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('firefox').build();

async function openWebsite(url) {
    try {
      await driver.get(url);
      const x = await driver.findElement(By.id("input_value")).getText()
      const f = Math.log(Math.abs(12*Math.sin(x)));
      await driver.findElement(By.id("answer")).sendKeys(f)
      await driver.findElement(By.id("robotCheckbox")).click();
      await driver.findElement(By.id("robotsRule")).click();
      await driver.findElement(By.xpath("//*[text()='Submit']")).click();

      console.log('Tests complete!');
    } catch (error) {
      console.error('Failed to open website:', error);
    } finally {
    //   await driver.quit();
    }
  }
  
  openWebsite('http://suninjuly.github.io/math.html');