import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jplants-searchbar',
  styleUrl: 'jplants-searchbar.css',
  shadow: true,
})
export class JplantsSearchbar {

enterSearch() {
  alert('Sorry, leider besitzt unsere Seite noch keine Suchfunktion.')
}

  render() {
    return (
      <Host>
        <div class="searchbar-unit">
        <input type="search"></input>
        <jplants-button onClick={() => this.enterSearch()} button-color="default" button-href="#" button-name="Suche"></jplants-button>
        </div>
      </Host>
    );
  }

}
