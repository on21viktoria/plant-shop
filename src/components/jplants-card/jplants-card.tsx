import { Component, Host, h, Prop } from '@stencil/core';

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

  getTags(): string[]{
    const tags = this.tags.split(',');
    return tags
  }

  render() {
    return (
      <Host>
        <div id="container">
          <div class="card">
            <img src={this.image} />
            <div class="card__details">
              <div> {this.getTags().map(tag => {
                return <span class="tag">{tag}</span>
              })}
              </div>
              <div>
                <div class="name">{this.name}</div>
                <div class="price">{this.price}€</div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
