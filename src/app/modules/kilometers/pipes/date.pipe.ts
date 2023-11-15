import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
  standalone: true
})
export class DatePipe implements PipeTransform {

  transform(value: string): string {
    if(value.includes('/')) return value
    const dateTimeSplit = value.split('T')
    const date = dateTimeSplit[0]

    const formatDate = `${date.split('-')[2]}/${date.split('-')[1]}/${date.split('-')[0]}`
    return `${formatDate}`;
  }

}
