function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = easing(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easing(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 *t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var home = document.querySelector('#home');
var about = document.querySelector('#about');
var services = document.querySelector('#feature');
var contact = document.querySelector('#socials');

var homeLink = document.querySelector('nav a[href="#home"]');
var aboutLink = document.querySelector('nav a[href="#about"]');
var servicesLink = document.querySelector('nav a[href="#feature"]');
var contactLink = document.querySelector('nav a[href="#socials"]');

homeLink.addEventListener('click', function() {
    smoothScroll('#home', 1000);
});

aboutLink.addEventListener('click', function() {
    smoothScroll('#about', 1000);
});

servicesLink.addEventListener('click', function() {
    smoothScroll('#feature', 1000);
});

contactLink.addEventListener('click', function() {
    smoothScroll('#socials', 1000);
});
