import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'sl-plant-footer',
  styleUrl: 'sl-plant-footer.css',
  shadow: true,
})
export class SlPlantFooter {

  @Prop() footerLinksJson: string;
  @Watch('footerLinksJson')

  handleFooterLinksJasonChanged(){
    this.convertJson();
  }
  
  @State() footerlinks: Array<{name: string, href: string}> = [];

  componentWillLoad(){
  this.convertJson();
  }
  
  convertJson(){
    this.footerlinks = JSON.parse(this.footerLinksJson);
  }

  render() {
    return (
      <Host>
        <footer>
          <ul class ="footer_links">
            {this.footerlinks.map(footerlinks=> (
               <li>
              <a href={footerlinks.href}>{footerlinks.name}</a>
              </li>))}
          </ul>
        </footer>   
      </Host>
    );
  }
}


/*<div class="footer">
          <div>
            <slot name="sl-column1">
            </slot>
          </div>
          <div>
            <a href='https://docs.google.com/document/d/1Agp5_kJokmiP4ucfFMRTUyiobUhXR0L8PWeUV3JxknU/edit'>
              Über uns
            </a>
            <br></br>
            <a href='https://docs.google.com/document/d/1Agp5_kJokmiP4ucfFMRTUyiobUhXR0L8PWeUV3JxknU/edit'>
              Mission
            </a>
            <br></br>
            <a href='https://docs.google.com/document/d/1Agp5_kJokmiP4ucfFMRTUyiobUhXR0L8PWeUV3JxknU/edit'>
              Nachhaltigkeit
            </a>
          </div>
          <div>
            <a href='https://docs.google.com/document/d/1Agp5_kJokmiP4ucfFMRTUyiobUhXR0L8PWeUV3JxknU/edit'>
              FAQ
            </a>
            <br></br>
            <a href='https://docs.google.com/document/d/1Agp5_kJokmiP4ucfFMRTUyiobUhXR0L8PWeUV3JxknU/edit'>
              Impressum
            </a>
            <br></br>
            <a href='https://docs.google.com/document/d/1Agp5_kJokmiP4ucfFMRTUyiobUhXR0L8PWeUV3JxknU/edit'>
              Community
            </a>
          </div>
          <div>
            <slot name="sl-column5">
            </slot>
          </div>
        </div>*/