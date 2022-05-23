import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { visit, onLanding, docExist } from "../../pages/landing";

Given(/^I am on landing page$/, () => {
  visit();
  onLanding();
});

Then(/^I see documentation link$/, () => {
  docExist();
});
