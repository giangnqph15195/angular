import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/model/Users';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // ckeck!: Iuser;
    
    const id = JSON.parse(localStorage.getItem("user") || '{}').user.id;
    console.log(id)
    if(id == 1){
      return true;
      
    }else{
      return false
    }
    // const users = JSON.parse(localStorage.getItem('user') as string);
    // console.log(users?.id)
    // console.log(users?.id!)
    // if(users?.id == 1) {
    //   return false
    // }else{
    //   return true
    // }
    

  }
  
}
