import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-qualitystatement',
  styleUrl: 'jplants-qualitystatement.css',
  shadow: true,
})
export class JplantsQualitystatement {
  @Prop() text: string;
  @Prop() imgsrc: string;
  @Prop() link: string;

  render() {
    return (
      <Host>
        <div class="container qualitystatement">
          <div class="img-container">
            <a href={this.link}>
              <img class="image-quality" src={this.imgsrc} alt={this.text} />
            </a>
          </div>
          <h3 class="header-quality"><a href={this.link}>{this.text}</a></h3>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
