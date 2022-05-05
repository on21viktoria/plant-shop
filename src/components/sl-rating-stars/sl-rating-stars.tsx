import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sl-rating-stars',
  styleUrl: 'sl-rating-stars.css',
  shadow: true,
})
export class SlRatingStars {

  render() {
    return (
      <Host>
          <div class="rating-stars">
            <input type="radio" id="5-stars" name="rating" value="5" />
            <label htmlFor="5-stars" class="star">★</label>
            <input type="radio" id="4-stars" name="rating" value="4" />
            <label htmlFor="4-stars" class="star">★</label>
            <input type="radio" id="3-stars" name="rating" value="3" />
            <label htmlFor="3-stars" class="star">★</label>
            <input type="radio" id="2-stars" name="rating" value="2" />
            <label htmlFor="2-stars" class="star">★</label>
            <input type="radio" id="1-stars" name="rating" value="1" />
            <label htmlFor="1-stars" class="star">★</label>
          </div>
      </Host>
    );
  }
}


