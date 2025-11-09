import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDerivenFormComponent } from './template-deriven-form.component';

describe('TemplateDerivenFormComponent', () => {
  let component: TemplateDerivenFormComponent;
  let fixture: ComponentFixture<TemplateDerivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDerivenFormComponent]
    });
    fixture = TestBed.createComponent(TemplateDerivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
