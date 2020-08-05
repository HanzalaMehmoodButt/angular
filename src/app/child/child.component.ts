import { Component, OnInit,Input ,OnChanges, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  @Input() public number1;
  @Input() public number2;
  // private num1;
  // private num2;
  //  @Input() set number1(val: number) {
  //   console.log('previous item = ', this.num1);
  //   console.log('currently selected item=', val);
  //    this.num1 = val;
  // }
  // @Input() set number2(val: number) {
  //   console.log('previous item = ', this.num2);
  //   console.log('currently selected item=', val);
  //   this.num2 = val;
  // }
  @Output() public sum = new EventEmitter<number>();
  // public sumC;
  
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    console.log(this.number1, this.number2)
    if (this.number1 != undefined && this.number2 != undefined) {
      this.sum.emit(this.number1 + this.number2)      
    }
  }

}
