var qrImageCreator = function(config) {
  var options = {
    width: 200,
    height: 200,
    typeNumber: -1,
    correctLevel: QRErrorCorrectLevel.H,
    background: "#ffffff",
    foreground: "#000000",
    text: 'none'
  };
  for (var i in config) {
    if (config.hasOwnProperty(i)) {
      if (options[i])
        options[i] = config[i];
    }
  }

  this.create = function () {

    // create the qrcode itself
    var qrcode = new QRCode(options.typeNumber, options.correctLevel);
    qrcode.addData(unescape("%EF%BB%BF"));
    qrcode.addData(unescape(encodeURIComponent(options.text)));
    qrcode.make();

    // create canvas element
    var canvas = document.createElement('canvas');
    canvas.width = options.width;
    canvas.height = options.height;
    var ctx = canvas.getContext('2d');

    // compute tileW/tileH based on options.width/options.height
    var tileW = options.width / qrcode.getModuleCount();
    var tileH = options.height / qrcode.getModuleCount();

    // draw in the canvas
    for (var row = 0; row < qrcode.getModuleCount(); row++) {
      for (var col = 0; col < qrcode.getModuleCount(); col++) {
        ctx.fillStyle = qrcode.isDark(row, col) ? options.foreground : options.background;
        var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
        var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
        ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
      }
    }
    return canvas.toDataURL();
  }
}
