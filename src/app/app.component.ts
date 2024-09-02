import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MycomponentsComponent } from "./mycomponents/mycomponents.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MycomponentsComponent, NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'To-Do-List';
  constructor(){
    // setTimeout(()=>{
    //   this.title="Complete the Tasks!!";
    // },2000);
  }
}
