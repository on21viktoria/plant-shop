import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-listitem',
  styleUrl: 'jplants-listItem.css',
  shadow: true,
})
export class JplantsListItem {
  @Prop() icon?: string;
  @Prop() listText: string;

  render() {
    return (
      <div class="container">
        <i class={this.icon}></i>
          <p>{this.listText}</p>
      </div>
    );
  }
}
