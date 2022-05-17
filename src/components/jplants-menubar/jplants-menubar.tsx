import { Component, Host, h, Prop, State, Event } from '@stencil/core';
import { EventEmitter } from '../../../dist/types/stencil-public-runtime';

@Component({
  tag: 'jplants-menubar',
  styleUrl: 'jplants-menubar.css',
  shadow: true,
})
export class JplantsMenubar {
  @Prop() navItemsLinks: string;

  @State() navlinks: Array<{ name: string; href: string }> = [];
  @State() showSidebar = false;
  @State() menubarClass = "navigation hide"

  @Event() onShow: EventEmitter;

  componentWillLoad() {
    this.navlinks = JSON.parse(this.navItemsLinks);
  }

  displaySidebar() {
    this.menubarClass = "navigation show"
  }

  hideSidebar() {
    this.menubarClass = "navigation hide"

  }

  render() {
    return (
      <Host>
        <div class="menu">
          <div class="burger-menu" onClick={() => this.displaySidebar()}>
            <div class="bar" id="bar-one"></div>
            <div class="bar" id="bar-two"></div>
            <div class="bar" id="bar-three"></div>
          </div>
          <nav class={this.menubarClass}>
            <div class="nav-title">
              <h3>Menu</h3>
              <span class="close-btn" onClick={() => this.hideSidebar()}>
                &times;
              </span>
            </div>
            <hr />
            <ul class="nav-links">
              {this.navlinks.map(navlink => (
                <li>
                  <a href={navlink.href}>{navlink.name}</a>
                </li>
              ))}
            </ul>
            <slot></slot>
          </nav>
        </div>
      </Host>
    );
  }
}
