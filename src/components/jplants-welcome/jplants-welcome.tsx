import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'jplants-welcome',
  styleUrl: 'jplants-welcome.css',
  shadow: true,
})
export class JplantsWelcome {
  @Prop() welcomeHeadline: string;
  @Prop() welcomeText1: string;
  @Prop() welcomeText2: string;

  render() {
    return (
      <Host>
      <div class="welcomeText">
        <h1>{this.welcomeHeadline}</h1>
          <p id="welcome-text-1">{this.welcomeText1}</p>
          <p id="welcome-text-2">{this.welcomeText2}</p>
      </div>
      <div class="slot-div">
      <slot name="button"></slot>
      </div>
      </Host>
    );
  }
}
