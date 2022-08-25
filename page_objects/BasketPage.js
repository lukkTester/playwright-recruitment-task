import { AssigningPage } from "./AssigningPage"
import selectors from "../selectors/selectors";

export class BasketPage {

   constructor(page, context) {
    this.page = page;
    this.context = context;
   }

   async clickOnAssignBtn () {
    await this.page.locator(selectors.assignBtn).click();
    return new AssigningPage(this.page, this.context); 
   }

}