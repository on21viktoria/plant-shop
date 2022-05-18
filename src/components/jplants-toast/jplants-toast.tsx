import { Component, Host, h, Prop, State, getAssetPath } from '@stencil/core';

@Component({
  tag: 'jplants-toast',
  styleUrl: 'jplants-toast.css',
  shadow: true,
  assetsDirs: ['assets']
})

export class JplantsToast {

  @Prop() toastTitle: string;
  @Prop() toastMessage: string;
  @Prop() toastButtonTitle: string;
  @Prop() toastImg: string;
  @Prop() toastPosition: string = 'right';
  
  @State() toastClass = "toast-hide";

  displayToast() {
    this.toastClass = "toast-show"
  }

  hideToast() {
    this.toastClass = "toast-hide"
  }

  render() {
    const imageSrc = getAssetPath(`/dist/stencil-starter-on/dist/components/assets/${this.toastImg}`);
    return (
      <Host>
        <div>
          <jplants-button button-name={this.toastButtonTitle} button-href='#toaster' button-color='default' onClick={() => this.displayToast()}></jplants-button>
        </div>
        <div class={this.toastPosition}>
        <div class={this.toastClass}>
          <div class="headline">  
            <h3>{this.toastTitle}</h3>
            <button class="close-button" onClick={() => this.hideToast()}><i class='bi bi-x'></i></button>
          </div>
          <div class="toast-body">
          <p>{this.toastMessage}</p>
          <img id="toast-icon" src={imageSrc}/>
          </div>
          </div>
          </div>
      </Host>
    );
  }
}
