import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplant-article',
  styleUrl: 'jplant-article.css',
  shadow: true,
})
export class JplantArticle {
@Prop() articleImage:string;
@Prop() articleTitle:string;
@Prop() articleText:string;
@Prop() articleInformation:string;

  render() {
    return (
      <Host>

        <div class ="Pflanzentipps">
          <img src={this.articleImage}/>
          <h3>{this.articleTitle}</h3>
          <p>{this.articleText}</p>
          <h4>{this.articleInformation}</h4>
        </div>
        
      </Host>
    );
  }

}
