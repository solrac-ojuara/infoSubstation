import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CardSubstation } from '../../components/card-substation/card-substation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  imports: [CardSubstation],
  templateUrl: './inicial.html',
  styleUrl: './inicial.css',
})
export class Inicial {
  constructor(private router: Router) {}
  consultarSubs() { this.router.navigate(['/consulta-substations']); }
}
