import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFactoryComponent } from './mat-factory.component';

describe('MatFactoryComponent', () => {
  let component: MatFactoryComponent;
  let fixture: ComponentFixture<MatFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
