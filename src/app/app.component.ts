import { Component } from '@angular/core';

import { HeroService } from '../webapi/hero.service';
// import './rxjs-extensions';

@Component({
  // moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
}