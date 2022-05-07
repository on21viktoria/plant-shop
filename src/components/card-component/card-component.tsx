import { Component, Host, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
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
            <img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies" />
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
