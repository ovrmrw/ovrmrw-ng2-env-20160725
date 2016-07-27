/* >>> boilerplate */
import assert from 'power-assert';
import lodash from 'lodash';
import { inject, async, fakeAsync, tick, addProviders, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';
import { asyncPower, fakeAsyncPower, setTimeoutPromise, elements, elementText, elementValue } from '../../test-ng2/testing.helper';
/* <<< boilerplate */


////////////////////////////////////////////////////////////////////////
// modules
import { HeroDetailComponent } from '../../src/hero-detail/hero-detail.component';
import { HeroService } from '../../src/webapi/hero.service';
import { Hero } from '../../src/types';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';


////////////////////////////////////////////////////////////////////////
// mocks
class MockHeroService {
  private heroes: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  getHeroAsPromise(id: number): Promise<Hero> {
    return Promise.resolve(this.heroes.find(hero => hero.id === id));
  }
}
class MockActivatedRoute {
  get params(): Observable<{ id: string }> {
    return Observable.of({ id: '16' });
  }
}


////////////////////////////////////////////////////////////////////////
// tests
describe('TEST: HeroDetail Component', () => {
  /* >>> boilerplate */
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      { provide: HeroService, useClass: MockHeroService },
      { provide: ActivatedRoute, useClass: MockActivatedRoute },
    ]);
  });

  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb;
  }));
  /* <<< boilerplate */


  it('can create, should have a selected hero', fakeAsyncPower(() => {
    const fixture = builder.createFakeAsync(HeroDetailComponent);
    tick();
    assert(!!fixture);
    if (fixture) {
      const el = fixture.nativeElement as HTMLElement;
      const component = fixture.componentRef.instance;
      assert(el.querySelector('h2') === null);
      component.ngOnInit();
      tick();
      assert.deepEqual(component.hero, { id: 16, name: 'RubberMan' });
      fixture.detectChanges();
      assert(el.querySelector('h2') !== null);
      assert(elementText(el, 'h2') === 'RubberMan details!');
      assert(elementText(el, 'div#heroid').trim() === 'id: 16');
      assert(elementValue(el, 'div#heroname input') === 'RubberMan');
    }
  }));

});