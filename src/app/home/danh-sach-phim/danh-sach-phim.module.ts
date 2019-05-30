import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { PhimComponent } from './phim/phim.component';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';

@NgModule({
  declarations: [DanhSachPhimComponent, PhimComponent],
  imports: [
    CommonModule,DanhSachPhimRoutingModule
  ]
})
export class DanhSachPhimModule { }
