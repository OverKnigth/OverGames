import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Videojuegos } from '../../utils/videojuegos';
import * as videojuegosData from '../../../../public/json/videojuegosData.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  videojuegos: Videojuegos [] = (videojuegosData as any).default;

  constructor(private router: Router) { }

  onClickVideojuego(videojuego: Videojuegos): void {
    this.router.navigate(['/videojuego', videojuego.id]);
  }
  ngOnInit(): void { 
    console.log(videojuegosData);
   }
}
