import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'jplants-test-menu',
  styleUrl: 'jplants-test-menu.css',
  shadow: true,
})
export class JplantsTestMenu {
  @Prop() menuLinksJson: string;

  @State() menuLinks: Array<{iconClass: string, name: string, href: string}> = [];


@Watch('menuLinksJson')
handleNavLinksJsonChanged(){
  this.convertNavJson();
}

componentWillLoad(){
  this.convertNavJson();
}

convertNavJson(){
  this.menuLinks = JSON.parse(this.menuLinksJson);
}

  render() {
    return (
      <Host>
        <ul class="nav">
            {this.menuLinks.map(menuLink => (
              <li>
                <a href={menuLink.href}><i class={menuLink.iconClass}></i>{menuLink.name}</a>
              </li>
            ))}
          </ul>
      </Host>
    );
  }

}
