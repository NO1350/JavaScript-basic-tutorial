/**
 * Created by Crixalis on 2015/1/19.
 */
window.onload = rotate;

var thisAd = 0;

function rotate() {
    var adImages = ["images/reading1.gif","images/reading2.gif","images/reading3.gif"];


    if (thisAd == adImages.length) {
        thisAd = 0;
    }
    thisAd++;
    document.getElementById("adBanner").src = adImages[thisAd];

    setTimeout(rotate, 3*1000);
}
