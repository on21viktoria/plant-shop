import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  shadow: true,
})
export class ExampleComponent {
  @Prop() name: string;
  @Prop() price: string;
  @Prop() image: string;

  render() {
    return (
      <Host>
        <div id="container">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies" />
            <div class="card__details">
              <span class="tag">Nature</span>

              <span class="tag">Lake</span>
              <div class="name">Lago di Braies</div>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.</p>

              <button>Read more</button>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
