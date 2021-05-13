import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDirectivePipeComponent } from './demo-directive-pipe.component';

describe('DemoDirectivePipeComponent', () => {
  let component: DemoDirectivePipeComponent;
  let fixture: ComponentFixture<DemoDirectivePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDirectivePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDirectivePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
