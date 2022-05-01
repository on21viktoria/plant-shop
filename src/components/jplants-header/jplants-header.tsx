import { Component, Host, h, Prop, State, Watch, getAssetPath } from '@stencil/core';

@Component({
  tag: 'jplants-header',
  styleUrl: 'jplants-header.css',
  shadow: true,
  assetsDirs: ['assets']
})

export class JplantsHeader {

@Prop() navLinksJson: string;
@Prop() logo = "jplants-logo.png";
@Prop() logoHref = "#";
@Prop() menuSymbol: string = "bi bi-list";
@Prop() menuSymbolHref: string = "#";


@State() navLinks: Array<{iconClass: string, name: string, href: string}> = [];

clickHandler(){
 alert('Hello World') 
}

@Watch('navLinksJson')
handleNavLinksJsonChanged(){
  this.convertNavJson();
}

componentWillLoad(){
  this.convertNavJson();
}

convertNavJson(){
  this.navLinks = JSON.parse(this.navLinksJson);
}

  render() {
    const imageSrc = getAssetPath(`/dist/stencil-starter-on/dist/components/assets/${this.logo}`);
    return (
      <Host>
        <div class="header">
        <a onClick={this.clickHandler}id="menu-button" href={this.menuSymbolHref}><i class={this.menuSymbol}></i></a>
        <a id="logo" href="#"><img src={imageSrc}/></a> 
        <nav>
          <ul class="nav">
            {this.navLinks.map(navLink => (
              <li>
                <a href={navLink.href}><i class={navLink.iconClass}></i>{navLink.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        </div>
      </Host>
    );
  }

}
