import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo',
  standalone: true
})
export class YesNoPipe implements PipeTransform {

  transform(value: boolean | undefined): string {
    return value ? 'Sí' : 'No';
  }

}
