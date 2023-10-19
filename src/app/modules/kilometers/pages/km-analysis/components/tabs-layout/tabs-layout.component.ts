import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabs-layout',
  templateUrl: './tabs-layout.component.html',
  styleUrls: ['./tabs-layout.component.css']
})
export class TabsLayoutComponent {

  @Output() onChangeRoute: EventEmitter<boolean> = new EventEmitter()
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter()

  onChangeRoutes(){
    this.onChangeRoute.emit(true)
  }

  submit(){
    this.onSubmit.emit(true)
  }

}
