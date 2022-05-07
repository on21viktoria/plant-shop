import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'sl-plant-footer',
  styleUrl: 'sl-plant-footer.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class SlPlantFooter {

  @Prop() footerLinksJson: string;
  @Prop() logo="logo_jPLANTS.png";
  
  @Watch('footerLinksJson')
  handleFooterLinksJasonChanged(){
    this.convertJson();
  }
  
  @State() footerlinks: Array<{zeile1: string, href1: string, zeile2: string, href2: string, zeile3: string, href3: string}> = [];

  componentWillLoad(){
  this.convertJson();
  }
  
  convertJson(){
    this.footerlinks = JSON.parse(this.footerLinksJson);
  }

  render() {
    /*const imageSrc = getAssetPath(`/dist/stencil-starter-on/dist/components/assets/${this.logo}`);*/
    return (
      <Host>
        <footer>
          <ul class ="footer_links">
          <img src="src/logo_jPLANTS.png"/>
            {this.footerlinks.map(footerlink=> (
              <li>
              <a href={footerlink.href3}>{footerlink.zeile1}</a>
              <br></br>
              <a href={footerlink.href3}>{footerlink.zeile2}</a>
              <br></br>
              <a href={footerlink.href3}>{footerlink.zeile3}</a>
              </li>))}
             <p>© 2021 JPlants, Inc. All rights reserved.</p>
          </ul>
        </footer>   
      </Host>
    );
  }
}