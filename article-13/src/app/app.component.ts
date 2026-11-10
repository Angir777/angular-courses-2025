import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';
import { FiveComponent } from './components/five/five.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OneComponent, TwoComponent, ThreeComponent, FourComponent, FiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kurs-angular-13';
}
