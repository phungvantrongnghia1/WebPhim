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
  public danhSachGheDat=[];
  public tien=0;
  constructor(private activatedRoute:ActivatedRoute,private QLPhim:QuanLyPhimService) { }

  ngOnInit() {
    this.layURL();
    this.LayChiTietPhongVe();
  }
  LayChiTietPhongVe(){
    this.QLPhim.layChiTietPhongVe(this.maLichChieu).subscribe((data)=>{
      this.chiTietPhong = data;
    });
  }
  layURL(){
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get('maChieu');
    console.log(this.maLichChieu);
  }
  datGhe(event){
    console.log(event);
    if(event.trangThai){
      this.danhSachGheDat.push(event.ghe);
     this.tien = this.tongTien();
    }
    else{
      let index =  this.danhSachGheDat.findIndex((item)=>{
        return item.TenGhe === event.ghe.TenGhe;
      })
      this.danhSachGheDat.splice(index,1);
      console.log(event.ghe.GiaVe);
      this.hieuTien(event.ghe.GiaVe);
    }
  }
  tongTien(){
    let sum =0;
    this.danhSachGheDat.map((item)=>{
      sum+=item.GiaVe;
    })
   return sum;
  }
  hieuTien(item){
     this.tien-=item;
  }
}
