import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-rating-stars',
  styleUrl: 'jplants-rating-stars.css',
  shadow: true,
})
export class JplantsRatingStars {
  @Prop() filledStars: number;
  filledStarArray: string[] = [];
  emptyStarArray: string[] = [];
  filledStarsAsString: string;
  emptyStarsAsString: string;

  componentWillLoad(currentFilled: number) {
    currentFilled = this.filledStars;

    if (currentFilled <= 5) {
      for (let i = 0; i < currentFilled; i++) {
        this.filledStarArray.push('★');
      }
      this.filledStarsAsString = this.filledStarArray.join('');

      for (let i = 0; i < 5 - currentFilled; i++) {
        this.emptyStarArray.push('★');
      }
      this.emptyStarsAsString = this.emptyStarArray.join('');

      return this.emptyStarsAsString, this.filledStarsAsString;
    } else {
      for (let i = 0; i < 5; i++) {
        this.filledStarArray.push('★');
      }
      this.filledStarsAsString = this.filledStarArray.join('');
      console.log('The number of stars exceeded the maximum of 5.')
    }
  }

  connectedCallback() {
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
