import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rayons } from './rayons';

describe('Rayons', () => {
  let component: Rayons;
  let fixture: ComponentFixture<Rayons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rayons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rayons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
