import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponent } from './my-component.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message', () => {
    expect(component.message).toBeDefined();
  });

  it('should display the message', () => {
    const messageEl = fixture.nativeElement.querySelector('p');
    expect(messageEl.textContent).toContain(component.message);
    });
});
