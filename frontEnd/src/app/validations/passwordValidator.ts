import { AbstractControl } from "@angular/forms";


export function registerFormValidation(control: AbstractControl):{[key: string]:any} | null  {
    const password = control.get('password') 
    const confirmPassword = control.get('confirmPassword')  
    console.log(control.get('password'));
    console.log(control.get('confirmPassword'));
       
    if(password && confirmPassword && password!==confirmPassword) return {'misMatch':true}
    return null
}