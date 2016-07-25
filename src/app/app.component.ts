import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from '../webapi/hero.service';
// import './rxjs-extensions';

@Component({
  moduleId: module.id,
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" [routerLinkActive]="active">Dashboard</a>
      <a [routerLink]="['/heroes']" [routerLinkActive]="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService,
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/