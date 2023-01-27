import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCampaignFormComponent } from './new-campaign-form.component';

describe('NewCampaignFormComponent', () => {
  let component: NewCampaignFormComponent;
  let fixture: ComponentFixture<NewCampaignFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCampaignFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCampaignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
