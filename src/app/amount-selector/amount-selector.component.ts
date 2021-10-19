import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-amount-selector',
  templateUrl: './amount-selector.component.html',
  styleUrls: ['./amount-selector.component.css']
})
export class AmountSelectorComponent implements OnInit {

  @Input() amount!: number;
  @Output() amountChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange = (val: string) => {
    const newAmount = parseInt(val, 10)
    this.amount = newAmount;
    this.amountChange.emit(newAmount);
    console.log(newAmount)
  }

}
