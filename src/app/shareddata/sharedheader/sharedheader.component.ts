import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sharedheader',
  templateUrl: './sharedheader.component.html',
  styleUrls: ['./sharedheader.component.scss']
})
export class SharedheaderComponent implements OnInit {

  @Output() backStepClicked = new EventEmitter();
  @Output() nextStepClicked = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  goToBackStep() {
    console.log("Clicked on back button to go back component");
    this.backStepClicked.emit();
  }

  goToNextStep() {
    console.log("Clicked on Next button to go next component");
    this.nextStepClicked.emit();
  }
}
