import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerAgendaPage } from './ver-agenda.page';

describe('VerAgendaPage', () => {
  let component: VerAgendaPage;
  let fixture: ComponentFixture<VerAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerAgendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
