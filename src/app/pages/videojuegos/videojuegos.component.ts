import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Videojuegos } from '../../utils/videojuegos';
import * as videojuegosData from '../../../../public/json/videojuegosData.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css'
})
export class VideojuegosComponent {

  videojuegos: Videojuegos [] = (videojuegosData as any).default;

  constructor(private router: Router) { }

  ngOnInit(): void { 
    
  }

  onClickVideojuego(videojuego: Videojuegos): void {
    this.router.navigate(['/videojuego', videojuego.id]);
  }
}
