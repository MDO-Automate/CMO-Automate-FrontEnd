import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { navbarItems } from '../../config/navbarItems';
import { MenuItem } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule, NavbarComponent ],
})
export class HeaderComponent {
  navItemList: MenuItem[] = navbarItems
}
