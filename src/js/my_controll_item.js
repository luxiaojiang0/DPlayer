class MyControllItem {
    constructor(player) {
        this.player = player;

        this.player.template.mask.addEventListener('click', () => {
            this.hide();
        });
        this.player.template.speedButton.addEventListener('click', () => {
            this.show();
        });
        for (let i = 0; i < this.player.template.speedBoxItem.length; i++) {
            // speed item
            this.player.template.speedBoxItem[i].addEventListener('click', () => {
                const speed = this.player.template.speedItem[i].dataset.speed;
                this.player.speed(speed);
                this.player.template.speedValueDom.innerHTML = speed;
                this.hide();
            });
        }
    }

    hide() {
        this.player.template.speedBox.classList.remove('dplayer-speed-box-open');
        this.player.template.mask.classList.remove('dplayer-mask-show');

        this.player.controller.disableAutoHide = false;
    }

    show() {
        this.player.template.speedBox.classList.add('dplayer-speed-box-open');

        this.player.template.mask.classList.add('dplayer-mask-show');
        this.player.controller.disableAutoHide = true;
    }
}

export default MyControllItem;
