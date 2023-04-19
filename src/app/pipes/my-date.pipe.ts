import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDatePipe'
})
export class MyDatePipe extends DatePipe implements PipeTransform {

  override transform(value: any, ...args: unknown[]): any {
    return super.transform(value, "MMMM dd, yyyy");
  }
  }
