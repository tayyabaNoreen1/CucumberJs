
//   Search for a keyword
//   @param {String} keyword keyword to search for
//   @param {object} inputField WebdriverIO input field element
//   @param {object} submitButton WebdriverIO submit button element



// export default (popupTitle, acceptButton, inputField, keyword, submitButton) => {
//     popupTitle.waitForDisplayed(5000);
//     acceptButton.click();
//     inputField.waitForDisplayed(5000);
//     inputField.click();
//     inputField.setValue(keyword);
//     submitButton.waitForDisplayed(5000);
//     submitButton.click();
// };

import homePage from "../../pages/Home";


//  Search for a keyword
//  @param {String} keyword keyword to seasrch for

export default keyword => {
    homePage.googleSearch(keyword);
}; 