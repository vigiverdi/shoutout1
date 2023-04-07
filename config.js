/*

Each API call costs 5 units!

Single key can refresh the wall every 45 seconds, while 9 keys are needed for a refresh rate 

of 5 seconds!

*/

//Update the same in php file also
var channelcount = 28;

//Default Name
var chanName = "!wall";

//Background Color

var bgColor = "black";



//Default Image url 
var imgUrl = "https://yt3.ggpht.com/-UojVTXXFUmQ/AAAAAAAAAAI/AAAAAAAAAAA/r2bMFQbWHv4/s360-c-k-no-mo-rj-c0xffffff/photo.jpg";

$('body').css("background",bgColor);
window.onload = () => {
    let bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    bannerNode.parentNode.removeChild(bannerNode);
 } 