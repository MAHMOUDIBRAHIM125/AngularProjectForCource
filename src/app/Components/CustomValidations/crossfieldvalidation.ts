import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// For check the confirmPassword is the same Password
export function passwordMatched():ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
        let password=control.get("password");
        let confirmedPassword=control.get("confirmedPassword");

        if(!password||!confirmedPassword||!password.value||!confirmedPassword.value)
            return null

        let valErr={'UnMatchedPassWord':{'pass':password.value,'confirm':confirmedPassword.value}};

        return (password.value===confirmedPassword.value)?null:valErr;
    }
}