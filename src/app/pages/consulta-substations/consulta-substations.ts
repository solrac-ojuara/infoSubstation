import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSubstation } from '../../components/card-substation/card-substation';
import { ConsultaApi, Substation } from '../../services/consulta-api';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-consulta-substations',
  imports: [CommonModule, CardSubstation],
  templateUrl: './consulta-substations.html',
  styleUrl: './consulta-substations.css',
})
export class ConsultaSubstations {
   protected readonly title = signal('infoSubstation');
 
  substations: Substation[] = [];
  private sub?: Subscription;
  
  constructor(private api: ConsultaApi) {}

  ngOnInit(): void {
    this.sub = this.api.getSubstations().subscribe({
      next: (data) => (this.substations = data || []),
      error: (err) => console.error('Erro ao buscar subestações', err),
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
