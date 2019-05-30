import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietPhimComponent } from './chi-tiet-phim.component';
import { ChiTietPhimRoutingModule } from './chi-tiet-phim-routing.module';

@NgModule({
  declarations: [ChiTietPhimComponent],
  imports: [
    CommonModule,ChiTietPhimRoutingModule
  ]
})
export class ChiTietPhimModule { }
