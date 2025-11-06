import { test, expect } from '@playwright/test';

test.only('check Java page practise', async ({ page }) => {
  // Open up the plawright webpage
  page.goto('https://playwright.dev');
  // Get the role (link saying Get started) and click on it
  await page.getByRole('link', {name: 'Get started' }).click();
  // hover over the node.js button which activates a drop down of options
  await page.getByRole('button', {name: 'Node.js'}).hover();
  // click the Java option
  await page.getByText('Java', {exact: true}).click();
  // Confirm new page loaded by its URL
  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
  // Confirm the text below is not visible on the page
  await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();
  // Set a constant then refer to it when checking the page does contain constants attribute. This case a set of text. 
  const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;
  await expect(page.getByText(javaDescription)).toBeVisible();

});
