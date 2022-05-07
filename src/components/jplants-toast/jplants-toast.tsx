import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jplants-toast',
  styleUrl: 'jplants-toast.css',
  shadow: true,
})


export class JplantsToast {

  @Prop() toastTitle: string;
  @Prop() toastMessage: string;
  
  render() {
    return (
      <Host>
          <div class="toast">
          <h3>{this.toastTitle}</h3>
          <p>{this.toastMessage}</p>
          </div>
      </Host>
    );
  }

}
