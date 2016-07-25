/* >>> boilerplate */
import assert from 'power-assert';
import lodash from 'lodash';
import { inject, async, fakeAsync, tick, addProviders, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';
import { asyncPower, fakeAsyncPower, setTimeoutPromise, elements, elementText } from '../../test-ng2/testing.helper';
/* <<< boilerplate */

import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../../src/app/app.component';
import { HeroService } from '../../src/webapi/hero.service';
import { appRouterProviders } from '../../src/app/app.routes';

import { Directive } from '@angular/core'
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';


class Mock { }
class MockRouter {
  createUrlTree() { }
}

@Directive({ selector: '[routerLinkActive]' })
class MockRouterLinkActive { }


describe('TEST: App Component', () => {
  /* >>> boilerplate */
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      appRouterProviders, // must be first
      { provide: APP_BASE_HREF, useValue: '/' }, // must be second
      { provide: ActivatedRoute, useClass: Mock },
      { provide: Router, useClass: MockRouter },
    ]);
  });

  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb;
  }));
  /* <<< boilerplate */


  it('can create, should have title', asyncPower(async () => {
    const fixture = await builder
      .overrideProviders(AppComponent, [{ provide: HeroService, useClass: Mock }])
      .overrideDirective(AppComponent, RouterLinkActive, MockRouterLinkActive)
      .createAsync(AppComponent);
    const el = fixture.nativeElement as HTMLElement;
    const component = fixture.componentRef.instance;
    assert(!!fixture);

    fixture.detectChanges();
    assert(component.title === 'Tour of Heroes');
  }));

});
