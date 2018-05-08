import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'arrayReverse',
    pure: false
})
export class ArrayReversePipe implements PipeTransform {

  transform(values: any[]): any {
    return values.reverse();
  }

}
