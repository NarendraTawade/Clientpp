import { FormControl } from "@angular/forms";
import { rejects } from "assert";
import { resolve } from "path";
import { Observable } from "rxjs";


// const forbiddenProjectNames = ["TestProject", "Test",]

export class CustomValidators{
    static invalidProjectName(control : FormControl) : {[s:string] : boolean} {
        if(control.value === 'Testproject'){
            return {'invalidProjectName':true};
        }
        return null as any;   
    }

    static asyncInvalidProjectName(control : FormControl) : Promise <any> | Observable <any>{
        const promise = new Promise((resolve , reject)=>{
            setTimeout(()=>{
                if(control.value === "AsyncTestProject"){
                    resolve({'invalidProjectName': true});
                } else{
                    resolve (null);
                }
            }, 200)
        })
        return promise;
    }
}