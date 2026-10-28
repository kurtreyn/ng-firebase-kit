import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgFirebaseKit } from './ng-firebase-kit';

describe('NgFirebaseKit', () => {
  let component: NgFirebaseKit;
  let fixture: ComponentFixture<NgFirebaseKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFirebaseKit],
    }).compileComponents();

    fixture = TestBed.createComponent(NgFirebaseKit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
