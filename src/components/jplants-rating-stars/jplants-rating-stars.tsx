import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-rating-stars',
  styleUrl: 'jplants-rating-stars.css',
  shadow: true,
})
export class JplantsRatingStars {

  @Prop() filledStars: string;
  @Prop() emptyStars: string;
  @Prop() filledStarArray: string[] = [];
  @Prop() emptyStarArray: string[] = [];
  @Prop() filledStarsAsString: string;
  @Prop() emptyStarsAsString: string;

  componentWillLoad() {
    this.displayFilledStars;
    this.displayEmptyStars;
  } 

  async displayFilledStars(currentFilled: number) {
    currentFilled = parseInt(this.filledStars);
    for (let i = 0; i < currentFilled; i++) {
      this.filledStarArray.push('★');
    } this.filledStarsAsString = this.filledStarArray.join('');
    return this.filledStarsAsString
  }

 async displayEmptyStars(currentEmpty: number) {
    currentEmpty = parseInt(this.emptyStars);

    for (let i = 0; i < currentEmpty; i++) {
      this.emptyStarArray.push('★');
    } this.emptyStarsAsString = this.emptyStarArray.join('');
    this.emptyStarsAsString;
  }

  componentDidUpdate(){
    this.filledStarArray = [];
    this.emptyStarArray = [];
  }

  render() {
    return (
      <Host>
        <div class="rating-stars">
        <p id="rating-stars-filled">{this.filledStarsAsString}</p><p id="rating-stars-empty">{this.emptyStarsAsString}</p>
        </div>
      </Host>
    );
  }

}
