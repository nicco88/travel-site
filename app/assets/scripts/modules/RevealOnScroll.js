import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();

  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function () {
      var currentItem = this; // each DOM element we are pointing at

      // new object that is an instance of the Waypoint class, which we have access to because of the library we included
      new Waypoint({
        element: currentItem, // DOM element
        handler: function () {
          $(currentItem).addClass('reveal-item--is-visible')
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
