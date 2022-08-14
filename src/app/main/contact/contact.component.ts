import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { lienHe } from 'src/app/model/lienHe/lienHe.model';
import { LienHeService } from 'src/app/services/lien-he.service';
// import { google }from 'googlemaps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  location: Location
  contact:lienHe={id:0,nameCus:"",email:"",phone:"",noiDung:"",date:new Date()}
  datas:lienHe[];

  form = this.formBuilder.group({
   
    nameCus: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    noiDung: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200),
    ]),

    
    date: new FormControl(),
  });
  constructor(
    private contactService: LienHeService,    private formBuilder: FormBuilder,   private toastr: ToastrService
    ) { }

    ngOnInit() {
        
    }
    showSuccess(message: string): void {
      this.toastr.success(message);
    }
    onSubmit(){
      this.contactService
      .addLienHe(this.form.value)
 
      .subscribe( (data) => {
        debugger;
        this.showSuccess('gửi thành công!');
       // this.form.get('noiDung')?.reset();
       this.form.reset();
      }, (error) => {
        this.showSuccess('sai!');
      });
      console.log(this.form.value);
      //return this.getAll();
    }
}


interface Location {
    latitude: number;
    longitude: number;
    mapType: string;
}
