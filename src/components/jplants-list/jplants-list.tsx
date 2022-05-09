import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'jplants-list',
  styleUrl: 'jplants-list.css',
  shadow: true,
})
export class JplantsList {
  @Prop() icon?: string;
  @Prop() listTitle?: string;
  @Prop() listText: string;
  @Prop() iconPosition?: string;
  @Prop() alignment?: string;
  @Prop({ reflect: true, mutable: true }) listItem: string;
  @Element() el: HTMLElement;

  getListItems() {
      const listItems = [];
      const listItemSlots = this.el.querySelectorAll('[slot="listItem"]')
      if(listItemSlots) {
          listItemSlots.forEach((listItemSlot) => {
              listItems.push(listItemSlot);
          })
      }
      return listItems;
  }

  getListItemContent() {
      const listItems = this.getListItems();
      let jsxContent = []

      listItems.map(listItems => jsxContent.push())
  }

  render() {
    return (
      <div>
        <ul>
          <div>
            <li>Hell bis halbschattig</li>
            <li>1x wöchentlich gießen</li>
            <li>Luftreinigende Eigenschaften</li>
            <li>Topfgröße: 15cm</li>
            <li>Höhe: 25cm</li>
            <li>Für Anfänger geeignet</li>
            <li>Haustiergeeignet</li>
          </div>
        </ul>
      </div>
    );
  }
}

