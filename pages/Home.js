class Home {
    get url() {
        return "/";
    }

    get popupTitle() {
        return $("#S3BnEe");
    }

    get acceptButton() {
        return $("#L2AGLb");
    }

    get searchField() {
        return $("#APjFqb");
    }

    get searchButton() {
        return $(".aajZCb .gNO89b");
    }

    googleSearch(keyword) {
        this.popupTitle.waitForDisplayed(5000);
        this.acceptButton.click();
        this.searchField.waitForDisplayed(5000);
        this.searchField.click();
        this.searchField.setValue(keyword);
        this.searchButton.waitForDisplayed(5000);
        this.searchButton.click();
    }
}
module.exports = new Home();