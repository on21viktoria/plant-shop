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

  render() {
    return (

        <div class ="Pflanzentipps">
          <img src={this.articleImage}/>
          <h3>{this.articleTitle}</h3>
          <p>{this.articleText}</p>
          <jplants-button button-name="Weiterlesen" button-href="#" button-icon-class="" button-color="default"></jplants-button>
        </div> 
    );
  }

}
