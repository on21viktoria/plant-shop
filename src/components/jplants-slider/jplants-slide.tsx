import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-slide',
  styleUrl: 'jplants-slide.css',
  shadow: true,
})
export class JplantsSlide {
  @Prop() imgSrc?: string | null;
  @Prop() imgDescr?: string;
  @Prop() slideTitle: string = "Default Title of Slide";

  render() {
    return (
      <Host>
        <div class="slide-wrapper">
          <img src={this.imgSrc} alt={this.imgDescr} class="slide-image"></img>
          <div class="text">
          <h1 class="slide-title">{this.slideTitle}</h1>
          <p class ="slide-text"><slot name='slide-text'></slot></p>
          <slot name='further-elements'></slot>
          </div>
        </div>
      </Host>
    );
  }
}
