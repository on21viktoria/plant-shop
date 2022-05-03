import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-qualitystatement',
  styleUrl: 'jplants-qualitystatement.css',
  shadow: true,
})
export class JplantsQualitystatement {
  @Prop() imgsrc: string;
  @Prop() text: string;

  render() {
    return (
      <Host>
        <div class ="container qualitystatement">
          <img class="image-quality" src="../../images/sendWithLove.png" alt={this.text}/>
          <h3 class="header-quality">{this.text}</h3>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
