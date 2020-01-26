//katex auto loaded
document.addEventListener("DOMContentLoaded", function () {
    renderMathInElement(
        document.body, {
            delimiters: [
                {
                    left: "$$",
                    right: "$$",
                    display: true
                },
                {
                    left: "\\[",
                    right: "\\]",
                    display: true
                },
                {
                    left: "$",
                    right: "$",
                    display: false
                },
                {
                    left: "\\(",
                    right: "\\)",
                    display: false
                }
            ],
            strict: false
        }
    );
});

//link auto decorate
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});