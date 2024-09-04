import { Component } from '@angular/core';
import { Videojuegos } from '../../utils/videojuegos';
import * as videojuegosData from '../../../../public/json/videojuegosData.json';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-videojuego',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent {
  id: number = 0;
  videojuego?: Videojuegos;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

    this.videojuego = ((videojuegosData as any).default as Videojuegos[]).find((videojuego) => videojuego.id === this.id);
  }
}
