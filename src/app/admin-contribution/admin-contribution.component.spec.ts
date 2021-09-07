import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContributionComponent } from './admin-contribution.component';

describe('AdminContributionComponent', () => {
  let component: AdminContributionComponent;
  let fixture: ComponentFixture<AdminContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
