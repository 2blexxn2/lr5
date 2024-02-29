import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, HeaderComponent, 
		FooterComponent, CarouselComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lr2';
	ngOnInit(): void {
    initFlowbite();
  }
	links = [
  {path:'/main', label: 'Main', active: 'button-active'},
  {path:'/carousel', label: 'About', active: 'button-active'},
  {path:'/header', label: 'Header', active: 'button-active'} // новий маршрут
]

/* 	links = [
	{path:'/main', label: 'Main', active: 'button-active'},
	{path:'/carousel', label: 'Carousel', active: 'button-active'}
	] */
}
