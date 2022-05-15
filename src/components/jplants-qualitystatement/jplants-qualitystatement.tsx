import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'jplants-qualitystatement',
  styleUrl: 'jplants-qualitystatement.css',
  shadow: true,
})
export class JplantsQualitystatement {
  @Element() el: HTMLElement;

  @Prop() text: string;
  @Prop() imgsrc: string;
  @Prop() link?: string;

  innerContainer: HTMLElement;

  componentDidLoad() {
    this.innerContainer = this.el.shadowRoot.querySelector('.inner-container');
  }

  flip() {
    this.innerContainer.classList.toggle('is-flipped');
  }

  render() {
    return (
      <Host>

          <div class="outer-container">
            <div class="inner-container" onClick={() => this.flip()}>

              <div class="side front">
                <div class="img-container">
                    <img class="image-quality" src={this.imgsrc} alt={this.text} />
                </div>
                <h3 class="header-quality">
                  <a href={this.link}>{this.text}</a>
                </h3>
              </div>

              <div class="side back">
                <slot name="back">
                  <h2 class="back-title">
                    <slot name="back-title"></slot>
                  </h2>
                  <p class="back-text">
                    <slot name="back-text"></slot>
                  </p>
                  <slot name="further-elements"></slot>
                </slot>
              </div>

            </div>
          </div>
      </Host>
    );
  }
}
