import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataPostComponent } from './my-data-post.component';

describe('MyDataPostComponent', () => {
  let component: MyDataPostComponent;
  let fixture: ComponentFixture<MyDataPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDataPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDataPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
