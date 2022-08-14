import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatContent'
})
export class FormatContentPipe implements PipeTransform {

  transform(value: string, start : number, end: number): any {
    return value.substr(start, end) + '...';
}


}
