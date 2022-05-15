import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'jplants-searchbar',
  styleUrl: 'jplants-searchbar.css',
  shadow: true,
})
export class JplantsSearchbar {

@Element() searchbarEl: HTMLElement;

searchbarUnit: HTMLElement;
searchField: HTMLInputElement;
googleLink: string = 'https://www.google.com/search?q=';

componentDidLoad(){
this.searchbarUnit = this.searchbarEl.shadowRoot.getElementById('searchbar-unit');
this.searchField = this.searchbarEl.shadowRoot.getElementById('search-field') as HTMLInputElement;
}

// Source for the basic Google-Search-Logic: https://pagedart.com/blog/how-to-add-a-search-bar-in-html/ 
enterSearch() {
  const url = `${this.googleLink}${this.searchField.value}`;
  const win = window.open(url, '_blank');
  win.focus();
}

  render() {
    return (
      <Host>
        <div id="searchbar-unit">
        <input id="search-field" type="search"></input>
        <jplants-button onClick={() => this.enterSearch()} button-color="default" button-href="#" button-name="Suche"></jplants-button>
        </div>
      </Host>
    );
  }
}
