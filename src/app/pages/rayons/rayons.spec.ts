import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRayons } from './rayons';

describe('PageRayons', () => {
  let component: PageRayons;
  let fixture: ComponentFixture<PageRayons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRayons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRayons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
