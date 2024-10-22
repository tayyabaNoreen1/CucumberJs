const { Given } = require('@wdio/cucumber-framework');
import homePage from "../../pages/Home";
import goToURL from "../../support/actions/goToURL";


// Given("a web browser is at google home page", () => {
//     browser.url("/");
// })


// Given(/^a web browser is at google home page$/, async () => {
//     await browser.url("/");
// });

// Given(/^a web browser is at google home page$/, () => {
//     goToURL("/");
// });

Given(/^a web browser is at google home page$/, () => {
    goToURL(homePage.url);
});


