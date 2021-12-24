import { Component, OnInit } from '@angular/core';
import { translate } from '@angular/localize/src/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  collapsed=true;

  constructor() { }

  ngOnInit(): void {

    
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
