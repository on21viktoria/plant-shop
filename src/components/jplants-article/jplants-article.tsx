import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-article',
  styleUrl: 'jplants-article.css',
  shadow: true,
})
export class JplantsArticle {
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
