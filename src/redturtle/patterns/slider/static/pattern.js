define('redturtle-patterns-slider', [
  'jquery',
  'mockup-patterns-base',
  'slick.min',
], function ($, Base) {
  'use strict';
  var Slider = Base.extend({
    name: 'slider',
    trigger: '.pat-slider',
    parser: 'mockup',
    defaults: {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    },
    init: function () {
      console.log('ciao!');
      var that = this;
      that.$el.slick(that.defaults);
    },
  });

  return Slider;
});
