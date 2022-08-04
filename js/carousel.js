var maximages = 10;
var extension = ".png";

var startpath = "pix3/birds";

function showbig(pic) {
  document.getElementById("bigpic").src = pic;
}

function calcslide(x) {
  var currentimage = document.getElementById("bigpic").src;

  var dotat = currentimage.indexOf(extension);

  var stringnumber = currentimage.substr(dotat - 2, 2);

  var nextnum = parseInt(stringnumber) + x;

  if (nextnum < 1) {
    nextnum = maximages;
  }
  //If nextnum is greater than maximages, wrap around to 1.
  if (nextnum > maximages) {
    nextnum = 1;
  }

  var twodigitnum = ("0" + nextnum).slice(-2);

  var showimg = startpath + twodigitnum + extension;

  showbig(showimg);

  console.log(showimg);
}
