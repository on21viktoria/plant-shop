import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'sl-rating-stars',
  styleUrl: 'sl-rating-stars.css',
  shadow: true,
})
export class SlRatingStars {
  
  dismissButton: HTMLButtonElement;

  @Prop() starelement = document.createElement("p");
  @Event() show: EventEmitter;

  async fillstars(id:number) {
    const starcontainer=document.getElementById("starcontainer");
    this.starelement.innerHTML = "test";
    starcontainer.appendChild(this.starelement);
    alert("Hello World");
  }

  componentDidLoad() {
    // Dismiss button click handler
    this.dismissButton.addEventListener('click', () => this.fillstars(5));
    }

  render() {
    return (
      <Host>
          <div class="rating-stars" id="starcontainer">
            <input type="radio" class="5-stars" name="rating" value="5" />
            <label htmlFor="5-stars" class="star5">★</label>
            <input type="radio" id="4-stars" name="rating" value="4" />
            <label htmlFor="4-stars" class="star4">★</label>
            <input type="radio" id="3-stars" name="rating" value="3" />
            <label htmlFor="3-stars" class="star3">★</label>
            <input type="radio" id="2-stars" name="rating" value="2" />
            <label htmlFor="2-stars" class="star2">★</label>
            <input type="radio" id="1-stars" name="rating" value="1" />
            <label htmlFor="1-stars" class="star1">★</label>
          </div>
          <button type ="button" ref={el => this.dismissButton = el as HTMLButtonElement}>Klick mich</button>
      </Host>
    );
  }
}

/*<div class="rating-stars">
            <input type="radio" class="5-stars" name="rating" value="5" />
            <label htmlFor="5-stars" class="star">★</label>
            <input type="radio" id="4-stars" name="rating" value="4" />
            <label htmlFor="4-stars" class="star">★</label>
            <input type="radio" id="3-stars" name="rating" value="3" />
            <label htmlFor="3-stars" class="star">★</label>
            <input type="radio" id="2-stars" name="rating" value="2" />
            <label htmlFor="2-stars" class="star">★</label>
            <input type="radio" id="1-stars" name="rating" value="1" />
            <label htmlFor="1-stars" class="star">★</label>
          </div>*/

