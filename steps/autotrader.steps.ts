import { browser, protractor, element, by, $ } from 'protractor';
import { Then } from 'cucumber';
const EC = protractor.ExpectedConditions;
import chai = require("chai");
const expect = chai.expect;
const delay = require('timeout-as-promise');

Then(/^I am able to land on the "([^"]*)" page$/, {timeout: 90 * 1000}, async function (argValue): Promise<any> {
   await browser.get(browser.baseUrl);
   expect(await browser.getCurrentUrl(), 'Verify the autotrader url').contains(argValue);
});

Then('I should able to verify the AutoTrader features', {timeout: 90 * 1000},
 async function (): Promise<any> {
    await browser.wait(EC.presenceOf($('button[data-qaid="lnk-browseByMake"]')), 10000);
    expect(await $('button[data-qaid="lnk-browseByMake"]').isPresent(), 'Verify the Browse By Make is present').equal(true);
    await browser.wait(EC.presenceOf($('button[data-qaid="lnk-browseByStyle"]')), 10000);
    expect(await $('button[data-qaid="lnk-browseByStyle"]').isPresent(), 'Verify the Browse by Style is present').equal(true);
    await browser.wait(EC.presenceOf($('a[data-qaid="adv_srch"]')), 10000);
    expect(await $('a[data-qaid="adv_srch"]').isPresent(), 'Verify the Advanced Search is present').equal(true);
    await browser.wait(EC.presenceOf(element(by.id('search'))), 10000);
    expect(await element(by.id('search')).isPresent(), 'Verify the Search button present').equal(true);
    expect(await element(by.id('makeCode')).element(by.tagName('option')).getText(), 'Verify the Make Drop down is present').equal('Any Make');
    expect(await element(by.id('ModelCode')).element(by.tagName('option')).getText(), 'Verify the Model Drop down is present').equal('Any Model');
    await element(by.linkText('Advanced Search')).click();
    await browser.wait(EC.presenceOf($('input[value="CONVERT"]')), 10000);
    await browser.wait(EC.presenceOf(element(by.className('ae-form'))), 10000);
    await $('input[data-qaid="input-zipCode"]').sendKeys('30004');
    await element(by.cssContainingText('div[data-qaid="chkGrp-condition"] div.col', 'Certified')).element(by.css('div.input-label')).click();
    await element(by.cssContainingText('div[data-qaid="cntr-Style"] label', 'Convertible')).element(by.css('div.input-label')).click();
    await element(by.cssContainingText('select[name="startYear"] option', '2017')).click();
    await element(by.cssContainingText('select[name="endYear"] option', '2020')).click();
    await element(by.cssContainingText('select[name="makeFilter0"] option', 'BMW')).click();
    await element(by.buttonText('Search')).click();
    expect(await element(by.cssContainingText('span[data-cmp="filterTitle"]', 'Make')).getText(), 'Verify the filter for Make is One').contains('1 selected');   
    await browser.executeScript("arguments[0].style.border='3px solid purple'", element(by.css('input[value="BMW"]')));
    let value = await element(by.css('input[value="BMW"]')).getAttribute('count');
    console.log(value);
    this.attach(`BWM count is ${value}`);
    let screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");

});


