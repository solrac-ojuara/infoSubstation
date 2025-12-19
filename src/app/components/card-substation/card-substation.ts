import { Component, Input } from '@angular/core';

interface Substation {
  name: string;
  relays?: string[];
  imageUrl?: string;
  conclusao?: number | string;
  id?: string;
}

@Component({
  selector: 'app-card-substation',
  imports: [],
  templateUrl: './card-substation.html',
  styleUrls: ['./card-substation.css']
})
export class CardSubstation {
  @Input() substation: Substation | null = null;

  get displayImage() {
    // Prefer full asset path if provided by the app; fallback to placeholder in assets
    return this.substation?.imageUrl ? this.substation.imageUrl : 'assets/imagens_subestacoes/placeholder.jpg';
  }

  formatConclusao(): string {
    const c = this.substation?.conclusao;
    if (!c) return '';
    const s = String(c);
    // Handle ddMMyyyy numeric like 20032014 => 20/03/2014
    if (/^\d{8}$/.test(s)) {
      return `${s.slice(0,2)}/${s.slice(2,4)}/${s.slice(4)}`;
    }
    // Try parsing as timestamp
    const d = new Date(Number(c));
    if (!isNaN(d.getTime())) return d.toLocaleDateString();
    return s;
  }
}
