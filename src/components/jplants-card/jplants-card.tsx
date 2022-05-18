import { Component, Host, h, Prop, Element } from '@stencil/core';

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

  modal = false;

  openModal() {
    this.modal = true;
  }

  getTags(): string[] {
    const tags = this.tags.split(',');
    return tags;
  }

  render() {
    return (
      <Host>
        <div id="container">
          <div class="card">
            <img src={this.image} />
            <div class="card__details">
              <div>
                {' '}
                {this.getTags().map(tag => {
                  return <span class="tag">{tag}</span>;
                })}
              </div>
              <div>
                <div class="name">{this.name}</div>
                <div class="price">{this.price}€</div>
                <jplants-button button-name="Zum Artikel" button-color="default" onClick={() => this.openModal()}></jplants-button>
              </div>
            </div>
          </div>
        </div>
        <jplants-modal title={this.name} showModal={this.modal}>
          <img slot="image" src={this.image} />
          <p slot="information">Hallo ich bin neu</p>
        </jplants-modal>
      </Host>
    );
  }
}
