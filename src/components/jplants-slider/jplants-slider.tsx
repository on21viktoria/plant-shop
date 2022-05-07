import { Component, Element, Prop, State, h, Host } from '@stencil/core';

@Component({
  tag: 'jplants-slider',
  styleUrl: 'jplants-slider.css',
  shadow: true,
})
export class JplantsSlider {
  @Element() el: HTMLElement;

  @Prop() showStatus: boolean;

  @State() currentSlideNumber: number = 0;

  private slidesCount: number = 0;
  private slides: NodeList;
  private sliderList: HTMLElement;
  private slideWidth: number = 0;
  private controls: object = {
    prev: null,
    next: null,
  };

  componentWillLoad() {
    this.slides = this.el.querySelectorAll('li');
    this.slidesCount = this.slides.length;
  }

  componentDidLoad() {
    this.sliderList = this.el.shadowRoot.querySelector('ul');
    this.slideWidth = (this.slides[0] as HTMLElement).offsetWidth;
    for (let type in this.controls) this.controls[type] = this.el.shadowRoot.querySelector('.btn_' + type);
    this.updateControls();
  }

  componentDidUpdate() {
    this.sliderList.style.transform = `translateX(${this.currentSlideNumber * this.slideWidth * -1}px)`;
    this.updateControls();
  }

  slide(amount: number = 1) {
    let slideTo = this.currentSlideNumber + amount;
    if (slideTo < 0 || slideTo >= this.slidesCount) return;
    this.currentSlideNumber = slideTo;
  }

  updateControls() {
    this.switchControl('prev', this.currentSlideNumber === 0 ? false : true);
    this.switchControl('next', this.currentSlideNumber === this.slidesCount - 1 ? false : true);
  }

  switchControl(type: string, enabled: boolean) {
    if (this.controls[type]) this.controls[type].disabled = !enabled;
  }

  render() {
    return (
      <Host>
        <div class="slider-container">
          <div>
            {!this.showStatus && (
              <p class="slide-title">
                Slide {this.currentSlideNumber + 1}/{this.slidesCount}
              </p>
            )}
          </div>
          <a class="control arrow-back" onClick={this.slide.bind(this, -1)}>
            &#10094;
          </a>
          <a class="control arrow-forward" onClick={this.slide.bind(this, 1)}>
            &#10095;
          </a>
          <div class="ul">
            <slot name='slider-one'></slot>
            <slot name='slider-two'></slot>
            <slot name='slider-three'></slot>
          </div>
          <div class="dot-container">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      </Host>
    );
  }
}


