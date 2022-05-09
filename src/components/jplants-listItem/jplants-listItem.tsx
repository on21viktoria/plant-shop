import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'jplants-listitem',
  styleUrl: 'jplants-listItem.css',
  shadow: true,
})
export class JplantsListItem {
  @Prop() icon?: string;
  @Prop() listTitle?: string;
  @Prop() listText: string;

  render() {
    return (
      <div class="container">
        <div class="context">
          <h4>{this.listTitle}</h4>
          <p>{this.listText}</p>
        </div>
      </div>
    );
  }
}
