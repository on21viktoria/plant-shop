import { Component, Host, h, Prop, State, Watch, getAssetPath } from '@stencil/core';

@Component({
  tag: 'jplants-footer',
  styleUrl: 'jplants-footer.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class jplantsFooter {

  @Prop() footerLinksJson: string;
  @Prop() logo = "jplants-logo.png";
  @Prop() rightText: string;
  
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
    const imageSrc = getAssetPath(`/dist/stencil-starter-on/dist/components/assets/${this.logo}`);
    return (
      <Host>
        <footer>
          <ul class ="footer_links">
          <img src={imageSrc}/>
            {this.footerlinks.map(footerlink=> (
              <li>
              <a href={footerlink.href3}>{footerlink.zeile1}</a>
              <br></br>
              <a href={footerlink.href3}>{footerlink.zeile2}</a>
              <br></br>
              <a href={footerlink.href3}>{footerlink.zeile3}</a>
              </li>))}
             <p id="right-text">{this.rightText}</p>
          </ul>
        </footer>   
      </Host>
    );
  }
}