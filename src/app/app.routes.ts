import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';
import { VideojuegoComponent } from './pages/videojuego/videojuego.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { warningsGuard } from './guards/warnings.guard';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'videojuegos', component: VideojuegosComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'videojuego/:id', component: VideojuegoComponent },
    { path: 'login', component: LoginComponent, canDeactivate: [warningsGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];
