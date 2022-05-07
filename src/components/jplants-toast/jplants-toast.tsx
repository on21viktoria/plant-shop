import { Component, Host, h, Prop, State, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'jplants-toast',
  styleUrl: 'jplants-toast.css',
  shadow: true,
})

export class JplantsToast {

  @Prop() toastTitle: string;
  @Prop() toastMessage: string;
  
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
          <button onClick={() => this.displayToast()}>Show toast</button>
          </div>
          <div class={this.toastClass}>
          <h3>{this.toastTitle}</h3>
          <p>{this.toastMessage}</p>
          <button class="close-button" onClick={() => this.hideToast()}><i class="bi bi-x"></i></button>
          </div>
      </Host>
    );
  }

}
