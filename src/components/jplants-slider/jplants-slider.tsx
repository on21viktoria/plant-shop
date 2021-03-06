// inspiriert von https://programmingduck.com/articles/javascript-carousel

import { Component, h, Host, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'jplants-slider',
  styleUrl: 'jplants-slider.css',
  shadow: true,
})

export class JplantsSlider {
  @Element() sliderEl: HTMLElement;

  @Prop() numberOfSlides: number;

  @State() currentSlide: number = 0;
  @State() slideAmount: number;
  @State() activeDot: string = "slide1";




  prevButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
  slideWrapper: HTMLDivElement;
  sliderContainer: HTMLDivElement;
  currentDot: HTMLElement;
  activatedDot: HTMLElement;

  @State() dotArray: Dot[] = [];

  componentWillLoad(){
    this.createDotArray(this.numberOfSlides);
    this.dotArray[0].class = "dot active"
  }

  componentDidLoad() {
    this.prevButton = this.sliderEl.shadowRoot.querySelector('.button.previous') as HTMLButtonElement;
    this.nextButton = this.sliderEl.shadowRoot.querySelector('.button.next') as HTMLButtonElement;
    this.slideWrapper = this.sliderEl.shadowRoot.querySelector('.slide-wrapper') as HTMLDivElement;
    this.sliderContainer = this.sliderEl.shadowRoot.querySelector('.slider-container') as HTMLDivElement;
    this.slideAmount = this.numberOfSlides;

  }

  handleNext() {
    if (this.currentSlide < this.slideAmount - 1) {
      this.currentSlide += 1;
    } else {
      this.currentSlide;
    }
    this.updateDotArray(this.currentSlide);
    this.sliderContainer.style.setProperty('--current-slide', `${this.currentSlide}`);
  }

  handlePrevious() {
    if (this.currentSlide > 0) {
      this.currentSlide -= 1;
    } else {
      this.currentSlide;
    }
    this.updateDotArray(this.currentSlide);
    if (this.sliderContainer) this.sliderContainer.style.setProperty('--current-slide', `${this.currentSlide}`);
  }

  createDotArray(amount: number) {
    for (let i = 0; i < amount; i++) this.dotArray.push({id:i, class: "dot"});
    return this.dotArray;
  }

  updateDotArray(currentSlide: number) {
    const newDotArray = this.dotArray.map(dot => {
      if(dot.id === currentSlide){
        return {...dot, class: "dot active"};
      } else {
      return {...dot, class: "dot"};
      }
    })
    return this.dotArray = newDotArray;
  }

  showSelectedSlide(slideId: number) {
    this.updateDotArray(slideId);
    if (this.sliderContainer) this.sliderContainer.style.setProperty('--current-slide', `${slideId}`);
  }

  render() {
    return (
      <Host>
        <div class="slider-container">
          <div class="slider-buttons">
            <button
              class="button previous"
              onClick={() => {
                this.handlePrevious();
              }}
            >
              &#10094;
            </button>
            <button
              class="button next"
              onClick={() => {
                this.handleNext();
              }}
            >
              &#10095;
            </button>
          </div>
          <div class="slide-wrapper">
            <div class="slide-content">
              <jplants-slide slide-title="Unsere beliebtesten Zimmerpflanzen" img-src="../src/components/assets/PlantSlider1.jpg" img-descr="Unsere beliebtesten Zimmerpflanzen">
                <p slot="slide-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img slot="further-elements" src="../src/components/assets/PlantSlider1.jpg" style={{ width: 'calc((100% /3) - 6px)', margin: '3px' }} />
                <img slot="further-elements" src="../src/components/assets/PlantSlider1.jpg" style={{ width: 'calc((100% /3) - 6px)', margin: '3px' }} />
                <img slot="further-elements" src="../src/components/assets/PlantSlider1.jpg" style={{ width: 'calc((100% /3) - 6px)', margin: '3px' }} />
                <h2 slot="further-elements">Jetzt im Angebot!</h2>
              </jplants-slide>
            </div>
            <div class="slide-content">
              <jplants-slide slide-title="Get ready for Balkonien" img-src="../src/components/assets/PlantSlider1.jpg" img-descr="Get ready for Balkonien">
                <p slot="slide-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2 slot="further-elements">Lass dich INSPIRIEREN</h2>
              </jplants-slide>
            </div>
            <div class="slide-content">
              <jplants-slide slide-title="How to be a Plant-Mommy" img-src="../src/components/assets/PlantSlider1.jpg" img-descr="How to be a Plant-Mommy">
                <p slot="slide-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2 slot="further-elements" style={{ float: 'right' }}>
                  Zu unserem Ratgeber
                </h2>
              </jplants-slide>
            </div>
          </div>
          <div class="dot-container">
            {this.dotArray.map(dot => (
              <span class={dot.class} onClick={() => this.showSelectedSlide(dot.id)}></span>
            ))}
          </div>
        </div>
      </Host>
    );
  }
}

interface Dot {
  id: number,
  class: string
}
