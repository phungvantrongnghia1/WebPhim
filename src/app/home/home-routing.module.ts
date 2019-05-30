import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'danh-sach-phim',loadChildren:'./danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule'},
    {path:'chi-tiet-phim/:id',loadChildren:'./danh-sach-phim/chi-tiet-phim/chi-tiet-phim.module#ChiTietPhimModule'},
    {path:'phong-ve/:maChieu',loadChildren:'./phong-ve/phong-ve.module#PhongVeModule'}
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
