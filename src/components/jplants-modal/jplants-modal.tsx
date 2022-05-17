import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

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
  @Prop()
  title: string;
  @Prop() image?: string;
  @Prop() tags?: string;
  @Event() close: EventEmitter

  openModal() {
    this.modal.style.display = 'block';
  }

  closeModal() {
    console.log('Hello');
    console.log(this.modal);
    this.close.emit()
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
            <div>
              <img src='https://plantaddiction.de/media/image/b1/5d/23/aloe-vera-t11L6GAmLWcLe7fe_1920x1920.jpg'/>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="button">
              Schließen
            </button>
          </div>
        </div>
      </Host>
    );
  }
}
