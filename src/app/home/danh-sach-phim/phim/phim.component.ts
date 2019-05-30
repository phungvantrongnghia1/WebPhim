import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {
  @Input() phim;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  MuaVe(){
    this.router.navigate(['/chi-tiet-phim/',this.phim.MaPhim]);
  }
}
