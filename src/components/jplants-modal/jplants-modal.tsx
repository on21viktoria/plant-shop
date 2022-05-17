import { Component, Host, h, Prop, Element, Method, EventEmitter, Event } from '@stencil/core';
import { shouldTransform } from '@stencil/core/testing/jest/jest-preprocessor';

@Component({
  tag: 'jplants-modal',
  styleUrl: 'jplants-modal.css',
  shadow: true,
})
export class ModalComponent {
  @Element() modal: HTMLElement;

  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop() title: string;
  @Prop() image?: string;
  @Prop() tags?: string;

  openModal() {
    this.modal.style.display = "block";
  }

  closeModal() {
    console.log("Hello");
    console.log(this.modal);
    modal.style.display = "none";
    //this.close.emit();
  }

  render() {
    return (
      <Host>
        <div class="modal" tabindex="-1" role="dialog">
          <div class="modal-header">
            <h4 modal-title>{this.title}</h4>
            <button type="button" class="button-close" aria-label="Modal schließen" onClick={this.closeModal}>
              x
            </button>
          </div>
          <div class="modal-body">
            <p>Here is some text</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="button">Schließen</button>
          </div>
        </div>
      </Host>
    );
  }
}
