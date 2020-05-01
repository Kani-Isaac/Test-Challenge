
import { Before, BeforeAll, After, AfterAll, Status, setDefaultTimeout, World } from 'cucumber';
import { browser } from "protractor";


BeforeAll(async () => {
  
});

setDefaultTimeout(60 * 10000);

Before(async function () {
});

After(function () {
    //login details
});


AfterAll(async function (): Promise<void> {
    await browser.quit();
});