import { Component, h, Prop } from '@stencil/core';

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
      <div class="welcomeText">
        <h1>{this.welcomeHeadline}</h1>
        <div class="column1" >
          <p>{this.welcomeText1}</p>
        </div>
        <div class="column2" >
          <p>{this.welcomeText2}</p>
        </div>
      </div>
    );
  }
}
