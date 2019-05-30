import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
@Input() ghe;
@Output() eventData = new EventEmitter();
  public status =false;
  objectGhe={};
  constructor() { }

  ngOnInit() {
  }
  datGhe(){
    this.status =!this.status;
    this.objectGhe={
      trangThai:this.status,
      ghe:this.ghe
    }
    this.eventData.emit(this.objectGhe);
  }
}
