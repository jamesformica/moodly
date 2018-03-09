var CurveHelper = {
  getLineWidth: function (mood) {
    switch (mood) {
      case HAPPY:
        return rando(30, 70);
      case NEUTRAL:
        return rando(5, 10);
      case SAD:
        return rando(2, 5);
    }
  },

  getLineAlpha: function (mood) {
    switch (mood) {
      case HAPPY:
        return rando(1, 3) / 10;
      case NEUTRAL:
        return rando(4, 6) / 10;
      case SAD:
        return rando(7, 10) / 10;
    }
  },

  getKeyPoints: function (mood, _canvas) {
    var points = [];
    var numPoints;

    switch (mood) {
      case HAPPY:
        numPoints = rando(5, 8);
        break;
      case NEUTRAL:
        numPoints = rando(4, 9);
        break;
      case SAD:
        numPoints = rando(10, 15);
        break;
    }

    for (var i = 0; i < numPoints; i++) {
      var x = rando(0, _canvas.width);
      var y = rando(0, _canvas.height);
      points.push(x, y);
    }

    // randomly close the loop
    if (rando(0, 1)) {
      points.push(points[0], points[1]);
    }

    return points;
  },

  getCurvePoints: function (keyPoints, mood, spacing) {
    var strength;
    switch (mood) {
      case HAPPY:
        strength = 0.9;
        break;
      case NEUTRAL:
        strength = 0.5;
        break;
      case SAD:
        strength = 0.1;
        break;
    }

    return getCurvePoints(keyPoints, strength, spacing);
  },

  paint: function (spacing, intervalTime, paintFunc) {
    return new Promise(function (resolve) {
      var keyPoints = CurveHelper.getKeyPoints(this.mood, this._canvas);
      var curvePoints = CurveHelper.getCurvePoints(keyPoints, this.mood, spacing);

      var index = 0;
      var interval = setInterval(function () {
        if (index > curvePoints.length) {
          clearInterval(interval);
          resolve();
        } else {
          var x = curvePoints[index];
          var y = curvePoints[index + 1];
          paintFunc.call(this, x, y, index, curvePoints);

          index += 2;
        }
      }.bind(this), intervalTime);
    }.bind(this));
  }
};