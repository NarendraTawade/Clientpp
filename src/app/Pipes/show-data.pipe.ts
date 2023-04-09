import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showData'
})
export class ShowDataPipe implements PipeTransform {

  transform(value: any, ...args: any): unknown {
    
    return args;
  }

}
