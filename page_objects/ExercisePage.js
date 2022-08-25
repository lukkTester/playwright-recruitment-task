import { BasketPage } from "./BasketPage"
import selectors from "../selectors/selectors";

export class ExercisePage {

    constructor(page, context) {
        this.page = page;
        this.context = context;
    }

    async searchForExercise (exercise) {
        await this.page.locator(selectors.exerciseSearchBox).fill(exercise);
    }
    
    async selectFirstSearchedExercise () {
        await this.page.locator(selectors.firstSearchedExerciseCheckbox).click();
    }

    async clickOnBasketBtn () {
        await this.page.locator(selectors.basketBtn).click();
        return new BasketPage(this.page, this.context)
    }
}