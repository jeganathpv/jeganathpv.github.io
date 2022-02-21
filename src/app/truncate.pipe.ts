import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, maxLength: number = 95): unknown {
    if(value.length < maxLength){
      return value;
    }

    return value.slice(0, maxLength - 5) + '...';
  }

}
