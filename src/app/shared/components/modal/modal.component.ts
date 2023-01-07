import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
})
/*
 *We can pass body and footer as ngContent and listen to changes on parent
 *<app-modal>
 *  <span body ><div>This should be rendered in header selection of ng-content</div><div>This should be rendered in header selection of ng-content</div></span>
 *  <div footer ><div class="as"><button>button1</button><button>button2</button></div></div>
 *</app-modal>
 */
export class UiModalComponent {
  @Input() title = '';
  @Input() zIndex = 1000;

  // Use isConfirmationModal if we need the border css and align the body to show at center
  @Input() isConfirmationModal = false;

  // Added for Missing Comparison Rules & Standardization Modal
  @Input() isFullHeight = false;

  @Output() closeEmitter = new EventEmitter<boolean>();

  @ViewChild('modalRef', { static: false }) modalRef: any;

  constructor() {}

  onOutsideClick(e) {
    if (e.target.matches('.modal-overlay')) {
      this.closeEmitter.emit();
    }
  }

  onCloseClick(_e) {
    this.closeEmitter.emit();
  }
}
