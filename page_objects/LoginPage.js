import { ServersPage } from "./ServersPage";
import selectors from "../selectors/selectors";

export class LoginPage {

   constructor(page, context) {
    this.page = page;
    this.context = context;
   }

   async openMainPage () {
    await this.page.goto('https://www.physitrack.co.uk/');
   }

   async clickOnLoginBtn () {
    const [serverPage] = await Promise.all([
        this.context.waitForEvent('page'),
        await this.page.locator(selectors.loginBtn).click()
     ])
      return new ServersPage(serverPage, this.context);
   }
}