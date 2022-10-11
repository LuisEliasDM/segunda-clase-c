import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent {//implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(){
  }

  // ngOnInit(): void{
  //   console.log("ngOnInit")
  // }

  // ngAfterContentInit(): void {
  //   console.log("ngAfterContentInit")
  // }

  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked")
  // }

  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit")
  // }

  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked")
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("ngOnChanges")
  // }

  // ngOnDestroy(): void {
  //   console.log("ngOnDestroy")
  // }

  showText(text: any){
    console.log(text);
  }

}
