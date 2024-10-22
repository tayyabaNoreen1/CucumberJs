const { Then } = require('@wdio/cucumber-framework');
import verifyLinksContain from "../../support/assertions/verifyLinksContain";
//import assert from "assert";

// Then(/^links related to (.*) are shown on the results page$/, (keyword) => {
//     const links = $$(".LC20lb");
//     links.forEach(link => {
//         const linkText = link.getText().toLowerCase();

//         if (linkText) {
//             assert(
//                 linkText.includes(keyword),
//                 `Link text does not include ${keyword}`
//             );
//         }
//     });
// });

// Then(/^links related to (.*) are shown on the results page$/, keyword => {
//     const links = $$((".LC20lb"));
//     verifyLinksContain(links, keyword);
// }); 


Then(/^links related to (.*) are shown on the results page$/, keyword => {
    verifyLinksContain(keyword);
}); 