import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButton {
  @Input() title: string = "";
  @Input() style: string = "basic";
  @Input() altText: string = "";
  @Input() isDisabled: boolean = false;
  @Input() showInfo: boolean = false;
  @Input() infoContent: string = "";
  @Output() activated = new EventEmitter();


  buttonClicked(){
    this.activated.emit();
  }
}

