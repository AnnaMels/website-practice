document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".animate-left");

    function checkSlide() {
        sections.forEach(section => {
            const slideInAt = (window.scrollY + window.innerHeight) - section.clientHeight / 4;
            const sectionBottom = section.offsetTop + section.clientHeight;
            const isHalfShown = slideInAt > section.offsetTop;
            const isNotScrolledPast = window.scrollY < sectionBottom;
            if (isHalfShown && isNotScrolledPast) {
                section.classList.add("animate");
            } else {
                section.classList.remove("animate");
            }
        });
    }

    window.addEventListener("scroll", checkSlide);
});
