import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [ RouterModule, CommonModule, MenubarModule ],
})
export class NavbarComponent implements OnInit {
  @Input() navItems: MenuItem[] = []

  ngOnInit(): void {
    if(this.navItems.length < 1) throw Error('El navbar debe tener al menos 1 item')
  }

}
