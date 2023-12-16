import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, HowToOrderComponent, OurMenuComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
