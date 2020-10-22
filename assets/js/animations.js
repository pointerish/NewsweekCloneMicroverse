const searchBar = document.querySelector(".search-nav");
const bottomNav = document.querySelector(".bottom-nav");

const t_line = new TimelineLite({paused: true, reversed: true});

t_line.to(bottomNav, 1, {
    width: '0%',
    ease: Power2.easeOut
});

searchBar.addEventListener('click', (e) => {

    if (t_line.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(t_line);
})

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}