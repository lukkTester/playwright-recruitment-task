import { ExercisePage } from "./ExercisePage";
import selectors from "../selectors/selectors";

export class ServersPage {

    constructor(page, context) {
        this.page = page;
        this.context = context;
    }

   async selectUSACountry() {
    await this.page.locator(selectors.usaCountry).click();
   }

   async clickOnContinueBtn () {
    await this.page.locator(selectors.continueBtn).click();
   }

   async clickOnBackToDemoBtn () {
    await this.page.locator(selectors.backToDemoBtn).click();
    return new ExercisePage(this.page, this.context);
   }
}