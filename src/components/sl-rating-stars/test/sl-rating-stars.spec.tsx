import { newSpecPage } from '@stencil/core/testing';
import { SlRatingStars } from '../sl-rating-stars';

describe('sl-rating-stars', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SlRatingStars],
      html: `<sl-rating-stars></sl-rating-stars>`,
    });
    expect(page.root).toEqualHtml(`
      <sl-rating-stars>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sl-rating-stars>
    `);
  });
});
