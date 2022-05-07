import { Component, Host, h, Prop, State, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'jplants-toast',
  styleUrl: 'jplants-toast.css',
  shadow: true,
})

export class JplantsToast {

  @Prop() toastTitle: string;
  @Prop() toastMessage: string;
  @Prop() toastPosition: string = 'right';
  
  @State() toastClass = "toast-hide";

  @Event() show: EventEmitter;

  displayToast() {
    this.toastClass = "toast-show"
  }

  hideToast() {
    this.toastClass = "toast-hide"
  }

  render() {
    return (
      <Host>
        <div>
          <jplants-button button-name='Show toast!' button-href='#' button-color='default' buttonIconClass='bi bi-box' onClick={() => this.displayToast()}></jplants-button>
        </div>
        <div class={this.toastPosition}>
        <div class={this.toastClass}>
          <div class="headline">  
            <h3>{this.toastTitle}</h3>
            <button class="close-button" onClick={() => this.hideToast()}><i class='bi bi-x'></i></button>
          </div>
          <p>{this.toastMessage}</p>
          </div>
          </div>
      </Host>
    );
  }
}
