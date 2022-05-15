import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-modal',
  styleUrl: 'jplants-modal.css',
  shadow: true,
})
export class ModalComponent {
  @Prop() title: string;
  @Prop() image: string;
  @Prop() price: string;
  @Prop() tags?: string;

  getTags(): string[]{
    const tags = this.tags.split(',');
    return tags
  }

  render() {
    return (
      <Host>
        <div>
          <div >
            <img />
            <div >
              <div> {this.getTags().map(tag => {
                return <span class="tag">{tag}</span>
              })}
              </div>
              <div>
                <div class="name">{this.image}</div>
                <div class="price">{this.price}€</div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
