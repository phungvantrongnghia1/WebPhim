import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from 'src/_core/services/quan-ly-phim.service';

@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {
  public maLichChieu;
  public chiTietPhong;
  constructor(private activatedRoute:ActivatedRoute,private QLPhim:QuanLyPhimService) { }

  ngOnInit() {
    this.layURL();
    this.LayChiTietPhongVe();
  }
  LayChiTietPhongVe(){
    this.QLPhim.layChiTietPhongVe(this.maLichChieu).subscribe((data)=>{
      this.chiTietPhong = data;
      console.log(data);
    });
  }
  layURL(){
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get('maChieu');
    console.log(this.maLichChieu);
  }
}
