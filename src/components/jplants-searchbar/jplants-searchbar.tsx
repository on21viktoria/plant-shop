import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-searchbar',
  styleUrl: 'jplants-searchbar.css',
  shadow: true,
})
export class JplantsSearchbar {

@Prop() searchBarName: string = 'Search';

enterSearch() {
  alert('Sorry, leider besitzt unsere Seite noch keine Suchfunktion.')
}

  render() {
    return (
      <Host>
        <div class="searchbar-unit">
        <input type="search"></input>
        <button onClick={() => this.enterSearch()}type="button" name="button">{this.searchBarName}</button>
        </div>
      </Host>
    );
  }

}
