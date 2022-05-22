import { Component, Host, h, Prop, Element, Event, EventEmitter, State, Watch, Method } from '@stencil/core';

@Component({
  tag: 'jplants-modal',
  styleUrl: 'jplants-modal.css',
  shadow: true,
})
export class ModalComponent {
  @Element() el: HTMLElement;

  @Prop()
  title: string;
  @Prop() image?: string;
  @Prop({mutable: true, reflect: true}) showModal = true;
  @State() show = false;

  componentWillLoad(){
    console.log(this.showModal);
  }
  componentWillUpdate() {
    console.log("Hello in update");
    console.log(this.showModal);
  }

  closeModal() {
    this.showModal = false;
    console.log("hallo" + this.showModal)
  }

  openModal() {
    this.showModal = true;
    console.log("hallo" + this.showModal)
  }

  render() {
    return (
      <Host>
        <div class={this.showModal ? 'modal visible' : 'modal'} tabindex="-1" role="dialog">
          <div class="modal-header">
            <h4 modal-title>{this.title}</h4>
            <button type="button" class="button-close" aria-label="Modal schließen" onClick={() => this.closeModal()}>
              x
            </button>
          </div>
          <div class="modal-body">
            {this.image ? (
              <div class="left">
                <slot name="image" />
              </div>
            ) : (
              <div></div>
            )}
            <div class="right">
              <h4>Informationen zur {this.title}</h4>
              <slot name="information" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="button" onClick={() => this.closeModal()}>
              Schließen
            </button>
          </div>
        </div>
        <jplants-button button-name="Zum Artikel" button-color="default" onClick={() => this.openModal()}></jplants-button>
      </Host>
    );
  }
}
