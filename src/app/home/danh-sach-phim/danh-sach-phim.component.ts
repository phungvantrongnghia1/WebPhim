import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from 'src/_core/services/quan-ly-phim.service';
@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  public danhSachPhim;
  constructor(private QLPhim:QuanLyPhimService) { }

  ngOnInit() {
    this.LayDanhSachPhim();
  }
  LayDanhSachPhim(){
    this.QLPhim.layDanhSachPhim().subscribe((data)=>{
      this.danhSachPhim = data;
    })
  }
}
