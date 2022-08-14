import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateProductComponent } from './cate-product.component';

describe('CateProductComponent', () => {
  let component: CateProductComponent;
  let fixture: ComponentFixture<CateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
