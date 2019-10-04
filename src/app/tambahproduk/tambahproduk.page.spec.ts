import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahprodukPage } from './tambahproduk.page';

describe('TambahprodukPage', () => {
  let component: TambahprodukPage;
  let fixture: ComponentFixture<TambahprodukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahprodukPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahprodukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
