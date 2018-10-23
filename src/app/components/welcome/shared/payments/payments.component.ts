import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/interfaces/list.interface';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  @Input() showTable: boolean;
  @Input() tableList: List;

  constructor() { }

  ngOnInit() { }

}
