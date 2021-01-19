let swipePageJs = {};

swipePageJs.path = "src/common";

swipePageJs.filename = "SwipePage.js";

swipePageJs.content = `
import Gestures from "../helpers/Gestures";


const DEFAULT_TIMEOUT= 10000;
const SELECTORS = {
  CAROUSEL: "~Carousel",
  CARD: "~card",
};

let CAROUSEL_RECTANGLES;
class SwipePage {
    waitForIsDisplayed (isShown = true) {
        $(SELECTORS.CAROUSEL).waitForDisplayed({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isShown,
        });
    }
  getCarouselRectangles() {
    this.waitForIsDisplayed()

    CAROUSEL_RECTANGLES =
      CAROUSEL_RECTANGLES ||
      driver.getElementRect($(SELECTORS.CAROUSEL).elementId);
    return CAROUSEL_RECTANGLES;
  }

     /**
     * Swipe the carousel to the LEFT (from  right to left)
     */
  swipeLeft() {
    const carouselRectangles = this.getCarouselRectangles();
    const y = Math.round((carouselRectangles.y + carouselRectangles.height) / 2);
    Gestures.swipe(
        { x: Math.round(carouselRectangles.width - (carouselRectangles.width * 0.20)), y },
        { x: Math.round(carouselRectangles.x + (carouselRectangles.width * 0.20)), y },
    );
  }
     /**
     * Swipe the carousel to the RIGHT (from left to right)
     */
  swipeRight () {
    const carouselRectangles = this.getCarouselRectangles();
    const y = Math.round((carouselRectangles.y + carouselRectangles.height) / 2);
    Gestures.swipe(
        { x: Math.round(carouselRectangles.x + (carouselRectangles.width * 0.20)), y },
        { x: Math.round(carouselRectangles.width - (carouselRectangles.width * 0.20)), y },
    );
}
}

export default new SwipePage();
`;

module.exports = swipePageJs;
