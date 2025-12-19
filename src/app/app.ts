import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CardSubstation } from "./components/card-substation/card-substation";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardSubstation, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  
}
