import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sl-plant-footer',
  styleUrl: 'sl-plant-footer.css',
  shadow: true,
})
export class SlPlantFooter {

  render() {
    return (
      <Host>
        <div class="footer">
          <div>
            <slot name="sl-column1">
            </slot>
          </div>
          <div>
            <slot name="sl-column2">
            </slot>
          </div>
          <slot name="sl-column3">
          </slot>
          <div>
            <slot name="sl-column4">
            </slot>
          </div>
          <div>
            <slot name="sl-column5">
            </slot>
          </div>
        </div>
      </Host>
    );
  }

}
