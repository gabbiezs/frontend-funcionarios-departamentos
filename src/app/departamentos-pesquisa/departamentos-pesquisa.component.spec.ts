import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosPesquisaComponent } from './departamentos-pesquisa.component';

describe('DepartamentosPesquisaComponent', () => {
  let component: DepartamentosPesquisaComponent;
  let fixture: ComponentFixture<DepartamentosPesquisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentosPesquisaComponent]
    });
    fixture = TestBed.createComponent(DepartamentosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
