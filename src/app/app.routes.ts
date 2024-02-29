import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: "main"},
  {path: 'main', component: MainComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: 'header', component: HeaderComponent} // новий маршрут
];

/* export const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: "main"},
	{path: 'main', component: MainComponent},
	{path: 'carousel', component: CarouselComponent}
];
 */