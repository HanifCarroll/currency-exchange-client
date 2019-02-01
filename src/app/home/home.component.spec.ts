// The import lines import open source functionality: async, ComponentFixture, TestBed.
// This component must provide the current path to where this angular open source is stored within this project.
// The HomeComponent was created for this project by development team: Blue Team and is store
// in the indicated relative path.nSince this file is specifically generated
// when the .ts file is compiled, I do not understand all of the details.

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
