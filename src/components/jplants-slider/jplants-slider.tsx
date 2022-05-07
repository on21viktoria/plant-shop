import { Component, Element, Prop, State, h, Host } from '@stencil/core';


@Component({
  tag: 'jplants-slider',
  styleUrl: 'jplants-slider.css',
  shadow: true,
})
export class JplantsSlider {
  @Element() el: HTMLElement;

  @Prop() showStatus: boolean;
  @Prop() numberOfSlides?: number = 1;

  @State() currentSlideNumber: number = 0;
  @State() slotNames: string[] = [];

  private slidesCount: number = 0;
  private slides: NodeList;
  private sliderList: HTMLElement;
  private slideWidth: number = 0;
  private controls: object = {
    back: null,
    forward: null,
  };

  componentWillLoad() {
    this.slides = this.el.querySelectorAll('div');
    this.slidesCount = this.slides.length;
  }

  componentDidLoad() {
    this.sliderList = this.el.shadowRoot.querySelector('.slides-wrapper');
    this.slideWidth = (this.slides[0] as HTMLElement).offsetWidth;
    // for (let type in this.controls) {this.controls[type] = this.el.shadowRoot.querySelector(type)
  // console.log("componentDidLoad", this.slideWidth, this.controls[type], type)
  // };
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
    this.switchControl('back', this.currentSlideNumber === 0 ? false : true);
    this.switchControl('forward', this.currentSlideNumber === this.slidesCount - 1 ? false : true);
  }

  switchControl(type: string, enabled: boolean) {
    if (this.controls[type]) this.controls[type].disabled = !enabled;
  }

  setSlotNames(){
    for(let i=0; i<=(this.numberOfSlides-1); i++) {
      this.slotNames.push("slide"+i.toString());
    }
    console.log("setSlotNames",this.slotNames)
  }

  getSlotNames(): string[]{
    const names = this.slotNames;
    console.log("getSlotNames", names)
    return names;
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
          <a class="control back" onClick={this.slide.bind(this, -1)}>
            &#10094;
          </a>
          <a class="control forward" onClick={this.slide.bind(this, 1)}>
            &#10095;
          </a>
          <div class="slides-wrapper"> {this.setSlotNames()}
          {this.getSlotNames().map(name => {
            return <div><slot name={name}></slot></div>
          })}
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


