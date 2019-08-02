import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {

    if(value.length === 0){
      return value;
    }
    let revStr = '';
    for(let i = value.length -1; i >= 0; --i){
      revStr += value[i]
    }

    return revStr;
  }

}
