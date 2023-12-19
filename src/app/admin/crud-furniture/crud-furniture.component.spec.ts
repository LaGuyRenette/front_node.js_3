import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFurnitureComponent } from './crud-furniture.component';

describe('CrudFurnitureComponent', () => {
  let component: CrudFurnitureComponent;
  let fixture: ComponentFixture<CrudFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
