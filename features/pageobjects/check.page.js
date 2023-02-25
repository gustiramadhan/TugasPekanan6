import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class checkPage extends Page {
  /**
   * define selectors using getter methods
   */
  get heading() {
    return $(".chakra-heading");
  }

  get alert() {
    return $(".chakra-alert");
  }
}

export default new checkPage();
