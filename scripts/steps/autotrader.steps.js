"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var cucumber_1 = require("cucumber");
var EC = protractor_1.protractor.ExpectedConditions;
var chai = require("chai");
var expect = chai.expect;
var delay = require('timeout-as-promise');
cucumber_1.Then(/^I am able to land on the "([^"]*)" page$/, { timeout: 90 * 1000 }, function (argValue) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.get(protractor_1.browser.baseUrl)];
                case 1:
                    _b.sent();
                    _a = expect;
                    return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                case 2:
                    _a.apply(void 0, [_b.sent(), 'Verify the autotrader url']).contains(argValue);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('I should able to verify the AutoTrader features', { timeout: 90 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g, value, screenShot;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.presenceOf(protractor_1.$('button[data-qaid="lnk-browseByMake"]')), 10000)];
                case 1:
                    _h.sent();
                    _a = expect;
                    return [4 /*yield*/, protractor_1.$('button[data-qaid="lnk-browseByMake"]').isPresent()];
                case 2:
                    _a.apply(void 0, [_h.sent(), 'Verify the Browse By Make is present']).equal(true);
                    return [4 /*yield*/, protractor_1.browser.wait(EC.presenceOf(protractor_1.$('button[data-qaid="lnk-browseByStyle"]')), 10000)];
                case 3:
                    _h.sent();
                    _b = expect;
                    return [4 /*yield*/, protractor_1.$('button[data-qaid="lnk-browseByStyle"]').isPresent()];
                case 4:
                    _b.apply(void 0, [_h.sent(), 'Verify the Browse by Style is present']).equal(true);
                    return [4 /*yield*/, protractor_1.browser.wait(EC.presenceOf(protractor_1.$('a[data-qaid="adv_srch"]')), 10000)];
                case 5:
                    _h.sent();
                    _c = expect;
                    return [4 /*yield*/, protractor_1.$('a[data-qaid="adv_srch"]').isPresent()];
                case 6:
                    _c.apply(void 0, [_h.sent(), 'Verify the Advanced Search is present']).equal(true);
                    return [4 /*yield*/, protractor_1.browser.wait(EC.presenceOf(protractor_1.element(protractor_1.by.id('search'))), 10000)];
                case 7:
                    _h.sent();
                    _d = expect;
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.id('search')).isPresent()];
                case 8:
                    _d.apply(void 0, [_h.sent(), 'Verify the Search button present']).equal(true);
                    _e = expect;
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.id('makeCode')).element(protractor_1.by.tagName('option')).getText()];
                case 9:
                    _e.apply(void 0, [_h.sent(), 'Verify the Make Drop down is present']).equal('Any Make');
                    _f = expect;
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.id('ModelCode')).element(protractor_1.by.tagName('option')).getText()];
                case 10:
                    _f.apply(void 0, [_h.sent(), 'Verify the Model Drop down is present']).equal('Any Model');
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.linkText('Advanced Search')).click()];
                case 11:
                    _h.sent();
                    return [4 /*yield*/, protractor_1.browser.wait(EC.presenceOf(protractor_1.$('input[value="CONVERT"]')), 10000)];
                case 12:
                    _h.sent();
                    return [4 /*yield*/, protractor_1.browser.wait(EC.presenceOf(protractor_1.element(protractor_1.by.className('ae-form'))), 10000)];
                case 13:
                    _h.sent();
                    return [4 /*yield*/, protractor_1.$('input[data-qaid="input-zipCode"]').sendKeys('30004')];
                case 14:
                    _h.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.cssContainingText('div[data-qaid="chkGrp-condition"] div.col', 'Certified')).element(protractor_1.by.css('div.input-label')).click()];
                case 15:
                    _h.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.cssContainingText('div[data-qaid="cntr-Style"] label', 'Convertible')).element(protractor_1.by.css('div.input-label')).click()];
                case 16:
                    _h.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.cssContainingText('select[name="startYear"] option', '2017')).click()];
                case 17:
                    _h.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.cssContainingText('select[name="endYear"] option', '2020')).click()];
                case 18:
                    _h.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.cssContainingText('select[name="makeFilter0"] option', 'BMW')).click()];
                case 19:
                    _h.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.buttonText('Search')).click()];
                case 20:
                    _h.sent();
                    _g = expect;
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.cssContainingText('span[data-cmp="filterTitle"]', 'Make')).getText()];
                case 21:
                    _g.apply(void 0, [_h.sent(), 'Verify the filter for Make is One']).contains('1 selected');
                    return [4 /*yield*/, protractor_1.browser.executeScript("arguments[0].style.border='3px solid purple'", protractor_1.element(protractor_1.by.css('input[value="BMW"]')))];
                case 22:
                    _h.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css('input[value="BMW"]')).getAttribute('count')];
                case 23:
                    value = _h.sent();
                    console.log(value);
                    this.attach("BWM count is " + value);
                    return [4 /*yield*/, protractor_1.browser.takeScreenshot()];
                case 24:
                    screenShot = _h.sent();
                    this.attach(screenShot, "image/png");
                    return [2 /*return*/];
            }
        });
    });
});
