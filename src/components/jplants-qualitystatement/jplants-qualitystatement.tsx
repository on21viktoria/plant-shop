import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-qualitystatement',
  styleUrl: 'jplants-qualitystatement.css',
  shadow: true,
})
export class JplantsQualitystatement {
  @Prop() text: string;
  @Prop() imgsrc: string

  render() {
    return (
      <Host>
        <div class ="container qualitystatement">
          <div class="img-container">
          <img class="image-quality" src={this.imgsrc} alt={this.text}/>
          </div>
          <h3 class="header-quality">{this.text}</h3>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
