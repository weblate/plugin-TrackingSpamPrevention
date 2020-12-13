/*!
 * Matomo - free/libre analytics platform
 *
 * Screenshot integration tests.
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

describe("TrackingSpamPreventionSettings", function () {
    this.timeout(0);

    this.fixture = "Piwik\\Plugins\\TrackingSpamPrevention\\tests\\Fixtures\\TrackingFixture";

    var selector = '.card-content:contains(\'TrackingSpamPrevention\')';
    var url = "?module=CoreAdminHome&action=generalSettings&idSite=1&period=day&date=yesterday";

    it("should display the settings page", async function () {
        await page.goto(url);
        await page.mouse.move(-10, -10);
        await page.waitForNetworkIdle();
        await page.waitFor(20000);
        expect(await page.screenshotSelector(selector)).to.matchImage('page');
    });
});