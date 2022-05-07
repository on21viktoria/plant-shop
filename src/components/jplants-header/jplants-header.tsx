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

@State() navLinks: Array<{iconClass: string, name: string, href: string}> = [];

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
        <jplants-menubar
          nav-items-links='[{"name":"Shop","href":"#"},{"name":"Angebote","href":"#"},{"name":"Plant-Basics","href":"#"},{"name":"How to care","href":"#"},{"name":"Galerie","href":"#"},{"name":"Blog","href":"#"}]'>       </jplants-menubar>
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
