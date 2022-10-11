import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public flag: boolean = true;

  constructor(){
  }

  ngOnInit(): void{
    this.ocultar();
  }

  ocultar(){
    let btnOcultar = document.getElementById("btnOcultar") as HTMLInputElement;

    btnOcultar?.addEventListener("click", () => {
      this.flag = !this.flag;
    })
  }

}
