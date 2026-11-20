import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incontournables } from './incontournables';

describe('Incontournables', () => {
  let component: Incontournables;
  let fixture: ComponentFixture<Incontournables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Incontournables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Incontournables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
