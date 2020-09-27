import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteVelocidadeComponent } from './teste-velocidade.component';

describe('TesteVelocidadeComponent', () => {
  let component: TesteVelocidadeComponent;
  let fixture: ComponentFixture<TesteVelocidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteVelocidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteVelocidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
