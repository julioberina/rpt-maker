import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { CacheService } from './cache.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  providers: [AuthService, HttpClient, HttpService, CacheService],
  exports: [
    AngularMaterialModule,
  ]
})
export class SharedModule { }
