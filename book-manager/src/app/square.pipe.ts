import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number): number {
    console.log("transform() of SquarePipe called");
    return value * value;
  }

}
