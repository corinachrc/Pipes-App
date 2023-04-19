import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrencyPipe'
})
export class MyCurrencyPipe extends CurrencyPipe implements PipeTransform {

  override transform(value: any, ...args: unknown[]): any{
    if(value.indexOf("$")==0){
    return value;
    }
    else{
      return super.transform(value)

    }

  }

}
