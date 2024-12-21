import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServicos2Component } from './exemplo-servicos2.component';

describe('ExemploServicos2Component', () => {
  let component: ExemploServicos2Component;
  let fixture: ComponentFixture<ExemploServicos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploServicos2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploServicos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
