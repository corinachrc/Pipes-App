import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasePipe'
})
export class TitleCasePipe implements PipeTransform {

  transform(input: string, ...args: unknown[]): string {
    if (!input) {
      return '';
  } else {
      return input.replace(/\b\w/g, first => first.toLocaleUpperCase())
  }


  }

}
