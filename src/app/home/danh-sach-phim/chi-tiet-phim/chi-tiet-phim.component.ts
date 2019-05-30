import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuanLyPhimService } from 'src/_core/services/quan-ly-phim.service';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {
  public maPhim;
  public chiTietPhim;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private QLPhim:QuanLyPhimService) { }

  ngOnInit() {
    this.layURL();
    this.LayChiTietPhim();
  }
  LayChiTietPhim(){
    this.QLPhim.layChiTietPhim(this.maPhim).subscribe((data)=>{
      this.chiTietPhim =data;
      console.log(data);
    })
  }
  layURL(){
   this.maPhim = this.activatedRoute.snapshot.paramMap.get('id');
  }
  muaVe(maLichChieu){
    this.router.navigate(['/phong-ve/',maLichChieu]);
  }
}
