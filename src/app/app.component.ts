import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostComponent } from './host/host.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning-app';
}
