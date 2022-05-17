import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-button',
  styleUrl: 'jplants-button.css',
  shadow: true,
})
export class JplantsButton {
  @Prop() buttonName: string;
  @Prop() buttonHref: string;
  @Prop() buttonIconClass: string;
  @Prop() buttonColor: string;

  willShowButton() {
    if (this.buttonName && this.buttonHref) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Host>
        {this.willShowButton() && (
          <a href={this.buttonHref}>
            <button type="button" class={this.buttonColor}>
              <i class={this.buttonIconClass}></i>
              {this.buttonName}
            </button>
          </a>
        )}
      </Host>
    );
  }
}
