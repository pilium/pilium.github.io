import ftime from  "../helpers/ftime.js";

var isDay = false
document.getElementById('js-cetus-cycle').style.background = "url('img/moon.png') left center no-repeat";
function poeCycle() {
    var poeTimerText = document.getElementById('poe_timer_text');
    var cetusCycle = document.getElementById('js-cetus-cycle');

    var now = Date.now() / 1000 + (22 * 60 - 10)
    var timeThing = 8999.999421
    var localTime = ((24 * (now % timeThing) / timeThing) + 18) % 24

    var tDay = ftime( (16 - localTime) / 24 * timeThing );
    var tNight = ftime( (24 - localTime) / 24 * timeThing );

    if (localTime < 16) {
        if (!isDay) {
            isDay = true
            cetusCycle.style.background = "url('img/sun.png') left center no-repeat";
        }   
        poeTimerText.innerHTML = tDay;
    } else {
        if (isDay) {
            isDay = false
            cetusCycle.style.background = "url('img/moon.png') left center no-repeat";
        }
        poeTimerText.innerHTML = tNight;
    }
}
poeCycle()
setInterval(poeCycle, 1000);