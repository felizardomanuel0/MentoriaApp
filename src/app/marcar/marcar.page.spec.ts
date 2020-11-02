import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcarPage } from './marcar.page';

describe('MarcarPage', () => {
  let component: MarcarPage;
  let fixture: ComponentFixture<MarcarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
