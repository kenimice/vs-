function checkAspectRatio() {
    const ratio = window.innerHeight / window.innerWidth;

    if (ratio > 2.16) {

    }
}

window.addEventListener("load", checkAspectRatio);
window.addEventListener("resize", checkAspectRatio);