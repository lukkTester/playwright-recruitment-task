import selectors from "../selectors/selectors";

export class AssigningPage {

    constructor(page, context) {
        this.page = page;
        this.context = context;
    }

    async clickOnPatientSelection() {
        await Promise.all([
            this.page.waitForSelector(selectors.patientSelection)
        ]);
        await this.page.locator(selectors.patientSelection).click();

    }

    async selectDemoPatient() {
        await this.page.keyboard.down('Enter');
    }

    async assignExercise() {
        await this.page.locator(selectors.confirmBtn).click();
        return this.page;
    }
}