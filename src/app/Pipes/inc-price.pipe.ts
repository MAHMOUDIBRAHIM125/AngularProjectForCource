import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incPrice'
})
export class IncPricePipe implements PipeTransform {

  transform(value: number): unknown {
    return value/50;
  }

}
