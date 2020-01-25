let leon, canvas, ctx;

const sw = 350;
const sh = 100;
const pixelRatio = 2;

function init() {
    canvas = document.getElementById('welcome-canvas');
    ctx = canvas.getContext("2d");

    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + 'px';
    canvas.style.height = sh + 'px';
    ctx.scale(pixelRatio, pixelRatio);

    controll = {
        box: false,
        grids: false,
        points: false,
        drawing: () => {
            let i, total = leon.drawing.length;
            for (i = 0; i < total; i++) {
                TweenMax.killTweensOf(leon.drawing[i]);
                TweenMax.fromTo(leon.drawing[i], 2, {
                    value: 0
                }, {
                    value: 1,
                    ease: Power4.easeOut
                });
            }
        }
    };

    leon = new LeonSans({
        text: 'Welcome',
        color: [
            ['#64d3ce', '#2a92ce'],
            ['#e7c4c4', '#fd46aa', '#e1ea73', '#ff8974'],
            ['#aae898', '#8ad781'],
            ['#64d3ce', '#2a92ce'],
            ['#e7c4c4', '#fd46aa', '#e1ea73', '#ff8974'],
            ['#64d3ce', '#2a92ce'],
            ['#aae898', '#8ad781']
        ],
        size: 80,
        weight: 300
    });

    requestAnimationFrame(animate);
}

function animate(t) {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, sw, sh);

    const x = (sw - leon.rect.w) / 2;
    const y = (sh - leon.rect.h) / 2;
    leon.position(x, y);

    leon.draw(ctx);
}

window.onload = () => {
    init();
    let i, total = leon.drawing.length;
    for (i = 0; i < total; i++) {
        TweenMax.fromTo(leon.drawing[i], 1.6, {
            value: 0
        }, {
            delay: i * 0.05,
            value: 1,
            ease: Power4.easeOut
        });
    }
};