import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jplants-searchbar',
  styleUrl: 'jplants-searchbar.css',
  shadow: true,
})
export class JplantsSearchbar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
