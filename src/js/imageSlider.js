class ImageSlider{
    #currentPosition = 0;
    #slideNumber = 0;
    #slideWidth = 0;

    sliderWrapEl;
    sliderListEl;
    nextBtnEl;
    previousBtnEl;

    constructor(){}

    assignElement(){
        this.sliderWrapEl = document.getElementById('slider-wrap');
        this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
        this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
        this.previousBtnEl = this.sliderWrapEl.querySelector('#previous');
    }
}