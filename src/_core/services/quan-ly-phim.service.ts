import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap,catchError }from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

  constructor(private http:HttpClient) { }
  layDanhSachPhim():Observable<any>{
    const url = "http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP09";
    return this.http.get(url).pipe(
      tap(
        ()=>{},
        catchError((err)=>{
          return err;
        })
      )
    )
  }
  layChiTietPhim(maPhim):Observable<any>{
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`
    return this.http.get(url).pipe(
      tap(
        ()=>{},
        catchError(err=>{
          return err;
        })
      )
    )
  }
  layChiTietPhongVe(maLichChieu):Observable<any>{
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    return this.http.get(url).pipe(
      tap(
        ()=>{},
        catchError(err=>{
          return err;
        })
      )
    )
  }
}
