import { Component, Host, h, State, getAssetPath } from '@stencil/core';


@Component({
  tag: 'jplants-customergallery',
  styleUrl: 'jplants-customergallery.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class customergallery {

images: ApiImg[] =  [
  {
    title: "Kundenbild von Isabel Köcher",
    url: getAssetPath('/dist/stencil-starter-on/dist/components/assets/Kundenbild_1.png'),
  },
  {
    title: "Kundenbild von Marie Bauer",
    url: getAssetPath('/dist/stencil-starter-on/dist/components/assets/Kundenbild_2.png'),
  },
  {
    title: "Kundenbild von Katharina Boni",
    url: getAssetPath('/dist/stencil-starter-on/dist/components/assets/Kundenbild_3.png'),
  },
  {
    title: "Kundenbild von Viktoria Seubert",
    url: getAssetPath('/dist/stencil-starter-on/dist/components/assets/Kundenbild_4.png'),
  },
  {
    title: "Kundenbild von Robin Kauffeld",
    url: getAssetPath('/dist/stencil-starter-on/dist/components/assets/Kundenbild_5.png'),
  },
  {
    title: "Kundenbild von Josef Slezak",
    url: getAssetPath('/dist/stencil-starter-on/dist/components/assets/Kundenbild_6.png'),
  },
  {
    title: "Kundenbild von Arnulf Mester",
    url: getAssetPath('/dist/stencil-starter-on/dist/components/assets/Kundenbild_7.png'),
  },
  {
    title: "Kundenbild von Thomas Wirth",
    url: getAssetPath('/dist/stencil-starter-on/dist/components/assets/Kundenbild_8.png'),
  }
]


@State() imgPosts: ApiImg[];
  componentWillLoad() {
    this.imgPosts = this.images
}

  render() {
    return (
      <Host>
        <h3>
          <slot></slot>
        </h3>
        <div class="grid-container">
        <div class="img-grid">{this.imgPosts && this.imgPosts.map(imgPost => <img src={imgPost.url} alt={imgPost.title} class="grow" />)}</div>
        </div>
      </Host>
    );
  }
}

interface ApiImg {
  title: string;
  url: string;
}
