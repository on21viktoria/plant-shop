import { newSpecPage } from '@stencil/core/testing';
import { JplantsWelcome } from '../jplants-welcome';

describe('jplants-welcome', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JplantsWelcome],
      html: `<jplants-welcome></jplants-welcome>`,
    });
    expect(page.root).toEqualHtml(`
      <jplants-welcome>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jplants-welcome>
    `);
  });
});
