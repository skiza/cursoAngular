import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { Router } from '@angular/router/src/router';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultComponent } from './components/result/result.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id_heroe', component: HeroeComponent },
  { path: 'results/:user_search', component: ResultComponent },

  { path: '**',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES , { useHas:true });
