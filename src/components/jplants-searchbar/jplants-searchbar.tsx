import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-searchbar',
  styleUrl: 'jplants-searchbar.css',
  shadow: true,
})
export class JplantsSearchbar {

@Prop() searchBarName: string = 'Search';

  render() {
    return (
      <Host>
        <div class="searchbar-unit">
        <input type="search"></input>
        <button type="button" name="button">{this.searchBarName}</button>
        </div>
      </Host>
    );
  }

}
