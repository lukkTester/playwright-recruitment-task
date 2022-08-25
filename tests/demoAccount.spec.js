// @ts-check
const { test, chromium, expect } = require('@playwright/test');
const {LoginPage} = require('../page_objects/LoginPage')

test('Assigning exercises on demo account', async () => {

   let browser = await chromium.launch()
   let context = await browser.newContext()
   let page = await context.newPage()
   let loginpage = new LoginPage(page, context);
   let serversPage;
   let exercisesPage;
   let basketPage;
   let assigningPage;

   await loginpage.openMainPage();

   serversPage = await loginpage.clickOnLoginBtn();
   await serversPage.selectUSACountry();
   await serversPage.clickOnContinueBtn();

   exercisesPage = await serversPage.clickOnBackToDemoBtn();
   await exercisesPage.searchForExercise("Bird dog");
   await exercisesPage.selectFirstSearchedExercise();

   basketPage = await exercisesPage.clickOnBasketBtn();

   assigningPage = await basketPage.clickOnAssignBtn();
   assigningPage.clickOnPatientSelection();
   assigningPage.selectDemoPatient();

   page = await assigningPage.assignExercise();

   //checks
   expect(page.locator('[id=assign-protocol-form]')).toHaveText('Przypisano program');
   expect(page.locator('[id=assign-protocol-form]')).toHaveText('Kod programu:');
   expect(page.locator('[id=assign-protocol-form]')).toHaveText('sxybepqu');
});