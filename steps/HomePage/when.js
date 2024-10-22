const { When } = require('@wdio/cucumber-framework');
import search from "../../support/actions/search";

// When(/^the user enters (.*) into the search bar$/, async (keyword) => {
//     await $("#S3BnEe").waitForDisplayed(5000);
//     await $("#L2AGLb").click();
//     await $("#APjFqb").waitForDisplayed(5000);
//     await $("#APjFqb").click();
//     await $("#APjFqb").setValue(keyword);
//     await $(".aajZCb .gNO89b").waitForDisplayed(5000);
//     await $(".aajZCb .gNO89b").click();

// });



// When(/^the user enters (.*) into the search bar$/, keyword => {
//     search($("#S3BnEe"), $("#L2AGLb"), $("#APjFqb"), keyword, $(".aajZCb .gNO89b"));
// });


import googleSearch from "../../support/actions/search";

When(/^the user enters (.*) into the search bar$/, keyword => {
    googleSearch(keyword);
});
