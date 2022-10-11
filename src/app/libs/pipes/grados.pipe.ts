import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grados'
})
export class GradosPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value, args);

    let escala = args[0]

    let transformacion

    if( escala === "C"){
      let fahrenheit = value * 1.8 + 32
      return fahrenheit + "°F"
    }

    if( escala === "F"){
      let centigrados = (value - 32) / 1.8
      return centigrados + "°C"
    }

    return;
  }

}
