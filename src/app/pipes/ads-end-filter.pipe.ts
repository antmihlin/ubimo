import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'adsEndFilter',
    pure: false
})
export class AdsEndFilterPipe implements PipeTransform {

  transform(items: any[], end: number): any {
		if(!items || !end )
			return items;
			
		return items.filter(item => item.time < end );
  }

}
