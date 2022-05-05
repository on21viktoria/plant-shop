import { newSpecPage } from '@stencil/core/testing';
import { SlPlantFooter } from '../sl-plant-footer';

describe('sl-plant-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SlPlantFooter],
      html: `<sl-plant-footer></sl-plant-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <sl-plant-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sl-plant-footer>
    `);
  });
});
