import com.microsoft.playwright.*;
import com.microsoft.playwright.options.*;
import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import java.util.*;

public class Example {
  public static void main(String[] args) {
    try (Playwright playwright = Playwright.create()) {
      Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
        .setHeadless(false));
      BrowserContext context = browser.newContext();
      Page page = context.newPage();
      page.navigate("https://www.saucedemo.com/");
      page.getByText("Swag Labs").click();
      page.locator("[data-test=\"username\"]").click();
      page.locator("[data-test=\"login-container\"] div").filter(new Locator.FilterOptions().setHasText("Login")).first().click();
      page.locator("[data-test=\"username\"]").click();
      page.locator("[data-test=\"username\"]").fill("standard_user");
      page.locator("[data-test=\"login-container\"] div").filter(new Locator.FilterOptions().setHasText("Login")).first().click();
      page.locator("[data-test=\"password\"]").click();
      page.locator("[data-test=\"password\"]").fill("secret_sauce");
      page.locator("[data-test=\"login-button\"]").click();
      page.locator("[data-test=\"add-to-cart-sauce-labs-bike-light\"]").click();
      page.locator("[data-test=\"shopping-cart-link\"]").click();
      page.locator("[data-test=\"checkout\"]").click();
    }
  }
}