import { Component, Host, h, State, getAssetPath } from '@stencil/core';

@Component({
  tag: 'sl-img-gallery',
  styleUrl: 'sl-img-gallery.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class SlImgGallery {
  @State() imgPosts: ApiImg[];
  componentWillLoad() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=8')
      .then(res => (res.status === 200 ? res.json() : Promise.reject('api failed to fetch')))
      .then(res => {
        console.log(res);
        return res;
      })
      .then((apiImgs: Array<ApiImg>) => (this.imgPosts = apiImgs))
      .catch(_ => (this.imgPosts = [])); // ignore errors
  }


  render() {
    const imgSrc = getAssetPath('dist/stencil-starter-on/dist/components/assets/Kundenbilder/Kundenbild_1.png')
    return (
      <Host>
        <h3>
          <slot></slot>
        </h3>
        <img src={imgSrc}/>
        <div class="sl-img-grid">{this.imgPosts && this.imgPosts.map(imgPost => <img src={imgPost.url} alt={imgPost.title} class="grow" />)}</div>
      </Host>
    );
  }
}

interface ApiImg {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
