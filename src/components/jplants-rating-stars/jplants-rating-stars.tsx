import { Component, Host, h, EventEmitter, State, Event, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-rating-stars',
  styleUrl: 'jplants-rating-stars.css',
  shadow: true,
})
export class JplantsRatingStars {

  @Prop() starNumber: number;
  @Prop() starArray: string[] = ['test'];

  @State() fiveStars = false;
  @State() starClass = "no-stars";

  @Event() onShow: EventEmitter;

  componentWillLoad(currentNumber: number) {
    currentNumber = this.starNumber
    for (let i = 0; i < currentNumber; i++) {
      this.starArray.push('★');
    } return this.starArray;
  } 

  componentDidUpdate(){
    this.starArray = [];
  }

  removeFiveStars() {
    this.starClass = "no-stars"
  }

  /* @Watch('starArrayJson')
  handleNavLinksJsonChanged(){
  this.convertNavJson();
}

componentWillLoad(){
  this.convertNavJson();
}

convertNavJson(){
  this.navLinks = JSON.parse(this.navLinksJson);
}
 */
  render() {
    return (
      <Host>
        <label class={this.starClass}>★</label>
        {/* <button type="button" onClick={() => this.addStars(5)}>Click me</button> */}
        <p>{this.starArray.toString()}</p>
      </Host>
    );
  }

}
