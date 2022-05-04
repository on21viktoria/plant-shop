import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jplants-menubar',
  styleUrl: 'jplants-menubar.css',
  shadow: true,
})
export class JplantsMenubar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
