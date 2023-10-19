import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { navbarItems } from '../../config/navbarItems';
import { NavbarItem } from '../../interfaces/navbar.interface';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule, NavbarComponent ],
})
export class HeaderComponent {
  navItemList: NavbarItem[] = navbarItems
}
