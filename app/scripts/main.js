$(function () {
  var image = $("#jcrop-test")[0];

  var keys = ['w', 'h', 'x', 'x2', 'y', 'y2'];

  var variants = {
    'original': function (i) {return i;},
    'parseInt': parseInt,
    'mathRound': Math.round,
    'mathCeil': Math.ceil
  };

  var jCropInstance;

  var initialCoords = [0, 0, image.naturalWidth, image.naturalHeight];

  var options = {
    onChange: updateValues,
    onSelect: updateValues,
    setSelect: initialCoords,
    trueSize: [image.naturalWidth, image.naturalHeight]
  };

  $('#jcrop-test').Jcrop(
    options,
    function () {
      jCropInstance = this;

      jCropInstance.setOptions({
        aspectRatio: parseFloat(5/3)
      });
    }
  );

  function updateValues(c) {
    keys.forEach(function (k) {
      Object.keys(variants).forEach(function (i) {
        var td = $(['#', k, '-', i].join(''));
        td.html(variants[i](c[k]));
      });
    });
  }
});
