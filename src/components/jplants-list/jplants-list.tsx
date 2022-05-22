import { Component, h, Prop, Element } from '@stencil/core';
import { IPlant, IPlantInformation, plants } from '../../utils/utils';

@Component({
  tag: 'jplants-list',
  styleUrl: 'jplants-list.css',
  shadow: true,
})
export class JplantsList {
  @Prop() title: string
  @Element() el: HTMLElement;

  listItems: IPlant[];
  listItemInformation: IPlantInformation[]

  componentWillRender(){
    this.getListItems();
  }

  getListItems() {
      this.listItems = [];
      this.listItems= plants;
      console.log(this.listItems);
      this.getListItemInformation();
  }

  getListItemInformation(){
    this.listItems.forEach(listItem => {
      if(listItem.plant === this.title){
        this.listItemInformation = listItem.plantInformation;
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.listItemInformation.map(listItem => (
            <jplants-listItem icon={listItem.icon} list-Text={listItem.text}></jplants-listItem>
          ))}
        </div>
        
      </div>
    );
  }
}

