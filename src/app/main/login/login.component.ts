import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    EmailCus: null,
    Password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  token:string[]
  roles: string[] = [];
  user:{userName:string,passWord:string}
  constructor( private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    const { EmailCus,Password } = this.form;
    this.authService.login(EmailCus, Password).subscribe(    
       (data) => {
         
         this.tokenStorage.saveTokenAdmin(data.token);
         this.tokenStorage.saveAdmin(data.user);
         this.route.navigate(['/checkout']);
       },
       (err) => {
         console.log("d2")
               this.errorMessage = err.error.message;
               this.isLoginFailed = true;
       }


     );

  }

}
