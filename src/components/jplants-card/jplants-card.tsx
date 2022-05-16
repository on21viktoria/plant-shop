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
    this.iconButton.style.backgroundColor = "white";
    this.iconButton.addEventListener("click", () => {
      this.showNotificationOnClick();
    })
  }

  
  getTags(): string[]{
    const tags = this.tags.split(',');
    return tags
  }

  toggle() {
    if(this.iconButton.style.backgroundColor === "white"){
      console.log("I'm in if")
      this.iconButton.style.backgroundColor = "red"
    }
    else{
      console.log("I'm in else")
      this.iconButton.style.backgroundColor = "white"
    }
  }

  render() {
    return (
      <Host>
        <div id="container">
          <div class="card">
            <img src={this.image} />
            <button id="iconButton">heart</button>
            <div class="card__details">
              <div> {this.getTags().map(tag => {
                return <span class="tag">{tag}</span>
              })}
              </div>
              <div>
                <div class="name">{this.name}</div>
                <div class="price">{this.price}€</div>
                <jplants-button button-name="Zum Artikel" button-href="#" button-color="default"></jplants-button>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
