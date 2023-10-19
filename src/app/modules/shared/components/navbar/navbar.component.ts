import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarItem } from '../../interfaces/navbar.interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [ RouterModule, CommonModule ],
})
export class NavbarComponent implements OnInit {
  @Input() navItems : NavbarItem[] = []

  ngOnInit(): void {
    if(this.navItems.length < 1) throw Error('El navbar debe tener al menos 1 item')
  }

}
