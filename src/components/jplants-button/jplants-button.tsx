import { Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'jplants-button',
  styleUrl: 'jplants-button.css',
  shadow: true,
})
export class JplantsButton {

@Prop() buttonName: string;
@Prop() buttonHref: string;

willShowButton(){
  if(this.buttonName && this.buttonHref){
    return true;
  } else {
    return false;
  }
}

  render() {
    return <Host>
      {
        this.willShowButton() && 
        <a href="#">
          <button type="button" name="button">
          {this.buttonName}
          </button>
        </a>
      }
      </Host>
  }

}
