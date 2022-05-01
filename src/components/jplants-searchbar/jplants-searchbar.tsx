import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-searchbar',
  styleUrl: 'jplants-searchbar.css',
  shadow: true,
})
export class JplantsSearchbar {

@Prop() searchBarName: string = 'Search...';

  render() {
    return (
      <Host>
        <div class="searchbar-unit">
        <button type="button" name="button">{this.searchBarName}</button>
        <input type="search"></input>
        </div>
      </Host>
    );
  }

}
