import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jplant-article',
  styleUrl: 'jplant-article.css',
  shadow: true,
})
export class JplantArticle {

  render() {
    return (
      <Host>
        <slot>

        <div class ="Produkt">
          <img src='src/components/jplant-article/philodendron-prince-of-orange_300x300.jpg'/>
          <h3>Philodendron Prince of Orange</h3>
          <p>Du fragst dich woher der Trend 'Orange is the new black' stammt? 
            Ganz klar von unserer Trendsetter-Pflanze schlechthin!
            Der Philodendron 'Prince of Orange' setzt mit seinen Farben die Trends
            für die neue Saison und ist das It-Piece in den Wohnungen der
            Plantaddicts. Bist du hip genug für diese Pflanze?</p>
          <h4>95,00€</h4>
        </div>
        
        </slot>
      </Host>
    );
  }

}
