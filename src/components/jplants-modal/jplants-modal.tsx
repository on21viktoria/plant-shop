import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'jplants-modal',
  styleUrl: 'jplants-modal.css',
  shadow: true,
})
export class ModalComponent {
  @Element() el: HTMLElement;

  @Prop()
  title: string;
  @Prop() image: string;
  @Prop({ mutable: true, reflect: true }) showModal = false;

  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }

  render() {
    return (
      <Host>
        <jplants-button button-name="Zum Artikel" button-color="default" onClick={() => this.openModal()}></jplants-button>
        <div class={this.showModal ? 'modal visible' : 'modal'} tabindex="-1" role="dialog">
          <div class="modal-header">
            <h4 modal-title>{this.title}</h4>
            <button type="button" class="button-close" aria-label="Modal schließen" onClick={() => this.closeModal()}>
              x
            </button>
          </div>
          <div class="modal-body">
            <div class="left">
              <img src={this.image}/>
            </div>
            <div class="right">
              <h4>Informationen zur {this.title}</h4>
              <slot name="information"/>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="button" onClick={() => this.closeModal()}>
              Schließen
            </button>
          </div>
        </div>
      </Host>
    );
  }
}
