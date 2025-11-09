  import { Component } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/Models/iuser';
import { passwordMatched } from '../../CustomValidations/crossfieldvalidation';
import { UserDataServiceService } from 'src/app/Services/user-data-service.service';

  @Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
  })
  export class ReactiveFormComponent {
  // must known any variable from type form group Is For Create ReactiveForm
  //this which added in html as [formGroup]="userForm" and all properties
    userForm:FormGroup;
     users: any[] = []; // هنا هتخزن البيانات الجديدة وتعرضها في الجدول
// more easy in added the value in properties by FormBuilder and added in userForm
    constructor(private fb:FormBuilder,private userServ:UserDataServiceService){

      // old used 
      // this.userForm=new FormGroup({
      //   fullName:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{3,}')]),
      //   email:new FormControl(''),
      //   phoneNum:new FormControl(''),
      //   address:new FormGroup({
      //     city:new FormControl(''),
      //     street:new FormControl(''),
      //     postalcode:new FormControl(''),
      //   }),
      //   password:new FormControl('')
      // });

      this.userForm=fb.group({
        fullName:['',[Validators.required,Validators.pattern('[A-Za-z]{3,}')]],
        email:[''],
        phoneNum:[''],
        // if there object such address inside another object such userform
        address:fb.group({
          city:[''],
          street:[''],
          postalcode:[''],
        }),
        password:['',[Validators.required]],
        confirmedPassword:['',[Validators.required]],
        referral:[''],
        otherreferral:['']
        //can added Validation on Confirm user in another ts and used in your ts 
        //but is From type validatorFn because not handel in angular 
        // on confirm the password and confirmpassword is the same 
        // so can created it manual
        //if need added another validators added 
        // {validators:[passwordMatched(),NameOfFunction()]}

      },{validators:[passwordMatched()]});
    }

    //for used all properties in userForm by the same name from properties
    get fullName(){
      return this.userForm.get('fullName');
    }
    
    get email(){
      return this.userForm.get('email');
    }

    get phoneNum(){
      return this.userForm.get('phoneNum');
    }

    get password(){
      return this.userForm.get('password');
    }

    get confirmedPassword(){
      return this.userForm.get('confirmedPassword');
    }

    get referral(){
      return this.userForm.get('referral');
    }

    get otherreferral(){
      return this.userForm.get('otherreferral');
    }

    // for added vaidation on input created during run time
    updateReferralValue(){
      if(this.referral?.value==='other'){
        this.otherreferral?.addValidators([Validators.required]);
      }else{
        this.otherreferral?.clearValidators();
      }

      // angular not return check validators on control so must added update on it 
      // so can take required in the first added but after not choose other so change must 
      //known angular the update 
      this.otherreferral?.updateValueAndValidity();
    }

    //added in form on (ngSubmit)="submit()"  after submit added values in object 
    // and added in let UserModel:IUser
    submit(){
      // let UserModel:IUser=this.userForm.value as IUser ;

      let UserModel:any=this.userForm.value  ;

  this.userServ.AddUser(UserModel).subscribe({
    next: (res) => {
      console.log('User saved successfully:', res);
      this.userForm.reset(); // نفرّغ الفورم بعد الإرسال
    },
    error: (err) => console.error('Error saving user:', err)
  });

      console.log(UserModel);
    }

  }
