import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'jplants-listitem',
  styleUrl: 'jplants-listItem.css',
  shadow: true,
})
export class JplantsListItem {
  @Prop() icon?: string;
  @Prop() listtitle?: string;
  @Prop() listtext: string;

  render() {
    return (
      <div class="container">
        <div class="context">
          <h4>{this.listtitle}</h4>
          <p>{this.listtext}</p>
        </div>
      </div>
    );
  }
}
