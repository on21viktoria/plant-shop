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
  @Prop() iconPosition?: string;
  @Prop() alignment?: string;

  getListItems() {
    const listItems = [];
    const listItemSlots = this.el.querySelectorAll('[slot="listItem"]');
    if (listItemSlots) {
      listItemSlots.forEach(listItemSlot => {
        listItems.push(listItemSlot);
      });
    }
    return listItems;
  }

  getListItemContent() {
    const listItems = this.getListItems();
    let jsxContent = [];

    listItems.map(listItems => jsxContent.push());
  } */

  render() {
    return (
      <div class="container">
        <div class="icon">
          <ion-icon name="heart"></ion-icon>
        </div>
        <div class="context">
          <h4>List</h4>
          <p>This is a list</p>
        </div>
      </div>
    );
  }
}
