var BrushHelper = {
  paintIterator: function (number, interval, callback) {
    return new Promise(function (resolve) {

      var start = null;
      var _this = this;

      function iterator(timestamp) {
        if (number === 0) {
          resolve();
          return;
        }

        if (!start) {
          start = timestamp;
        }

        if (timestamp - start < interval) {
          window.requestAnimationFrame(iterator);
        } else {
          start = timestamp;
          callback.call(_this);

          number -= 1;
          window.requestAnimationFrame(iterator);
        }
      }

      window.requestAnimationFrame(iterator);
    }.bind(this));
  },
};
