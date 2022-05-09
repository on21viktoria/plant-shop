import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-rating-stars',
  styleUrl: 'jplants-rating-stars.css',
  shadow: true,
})
export class JplantsRatingStars {

  @Prop() filledStars: number;
  @Prop() emptyStars: number;
  @Prop() filledStarArray: string[] = [];
  @Prop() emptyStarArray: string[] = [];
  @Prop() filledStarsAsString: string;
  @Prop() emptyStarsAsString: string;

  componentWillLoad(currentFilled: number, currentEmpty: number) {
    currentFilled = this.filledStars;
    for (let i = 0; i < currentFilled; i++) {
      this.filledStarArray.push('★');
    } this.filledStarsAsString = this.filledStarArray.join('');
  
    currentEmpty = this.emptyStars;

    for (let i = 0; i < currentEmpty; i++) {
      this.emptyStarArray.push('★');
    } this.emptyStarsAsString = this.emptyStarArray.join('');

    return this.emptyStarsAsString, this.filledStarsAsString;
  } 

  connectedCallback(){
    this.filledStarArray = [];
    this.emptyStarArray = [];
  }

  render() {
    return (
      <Host>
        <div class="rating-stars">
        <p id="rating-stars-filled">{this.filledStarsAsString}</p>
        <p id="rating-stars-empty">{this.emptyStarsAsString}</p>
        </div>
      </Host>
    );
  }
}
