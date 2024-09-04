import { Injectable } from '@angular/core';
import { getDatabase, ref, set } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private db = getDatabase();

  constructor() { }

  saveCompra(datosFormulario: any): Promise<void> {
    const comprasRef = ref(this.db, 'compras');
    return set(comprasRef, datosFormulario);
  }
}
