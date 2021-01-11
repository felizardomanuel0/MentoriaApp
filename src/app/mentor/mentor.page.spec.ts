import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MentorPage } from './mentor.page';

describe('MentorPage', () => {
  let component: MentorPage;
  let fixture: ComponentFixture<MentorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MentorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
