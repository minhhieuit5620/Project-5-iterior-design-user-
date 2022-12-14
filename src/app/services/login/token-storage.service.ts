import { Injectable } from '@angular/core';

// const TOKEN_KEY = 'auth-token';
// const USER_KEY = 'auth-user';


const TOKEN_Cus_KEY = 'auth-customer-token';
const Cus_KEY = 'auth-customer';

declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public saveTokenAdmin(token: string): void {
    const second = 120 * 60 * 1000;
    sessionStorage.removeItem(TOKEN_Cus_KEY);
    sessionStorage.setItem(TOKEN_Cus_KEY, token);
    setTimeout(() => {
      sessionStorage.removeItem(TOKEN_Cus_KEY);
      alertify
        .alert()
        .setHeader('Phiên đăng nhập đã hết hạn!')
        .setting({
          message: 'Vui lòng đăng nhập lại',
          onok: function () {
            window.location.href = '/login';
          },
        })
        .show();
    }, second);
  }



  public getToken_Admin(): string | null {
    return sessionStorage.getItem(TOKEN_Cus_KEY);
  }

  // public getToken_User(): string | null {
  //   return sessionStorage.getItem(TOKEN_USER_KEY);
  // }

  public saveAdmin(customer: any): void {
    sessionStorage.removeItem(Cus_KEY);
    sessionStorage.setItem(Cus_KEY, JSON.stringify(customer));
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  // public saveToken(token: string): void {
  //   window.sessionStorage.removeItem(TOKEN_KEY);
  //   window.sessionStorage.setItem(TOKEN_KEY, token);
  // }

  // public getToken(): string | null {
  //   return window.sessionStorage.getItem(TOKEN_KEY);
  // }

  // public saveUser(user: any): void {
  //   window.sessionStorage.removeItem(USER_KEY);
  //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  // }

  // public getUser(): any {
  //   const user = window.sessionStorage.getItem(USER_KEY);
  //   if (user) {
  //     return JSON.parse(user);
  //   }

  //   return {};
  // }
}
