import { Component, Host, h, Prop, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'jplants-card',
  styleUrl: 'jplants-card.css',
  shadow: true,
})
export class CardComponent {
  @Prop() name: string;
  @Prop() price: string;
  @Prop() image: string;
  @Prop() tags?: string;
  @Prop() icon?: string;
  @Prop() filledStars: number;

  @Element() cardEl: HTMLElement
  iconButton: HTMLButtonElement;

  @Event() showNotification: EventEmitter;

  showNotificationOnClick() {
    this.toggle();
    console.log("hallo")
    this.showNotification.emit();
  }
  
  componentDidLoad(){
    this.iconButton = this.cardEl.shadowRoot.querySelector("#iconButton") as HTMLButtonElement;
    this.iconButton.style.color = "white";
    this.iconButton.addEventListener("click", () => {
      this.showNotificationOnClick();
    })
  }

  
  getTags(): string[]{
    const tags = this.tags.split(',');
    return tags
  }

  toggle() {
    if(this.iconButton.style.color === "white"){
      this.iconButton.style.color = "#496a43"
    }
    else{
      this.iconButton.style.color = "white"
    }
  }

  render() {
    return (
        <div id="container">
          <div class="card">
            <img src={this.image} />
            <i id="iconButton" class="bi bi-heart-fill"></i>
            <div class="card__details">
              <div> {this.getTags().map(tag => {
                return <span class="tag">{tag}</span>
              })}
              </div>
              <div>
                <jplants-rating-stars filled-stars={this.filledStars}></jplants-rating-stars>
                <div class="name">{this.name}</div>
                <div class="price">{this.price}€</div>
                <jplants-button button-name="Zum Artikel" button-href="#" button-color="default"></jplants-button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
