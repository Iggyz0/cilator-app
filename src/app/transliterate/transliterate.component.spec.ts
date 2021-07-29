import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransliterateComponent } from './transliterate.component';

describe('TransliterateComponent', () => {
  let component: TransliterateComponent;
  let fixture: ComponentFixture<TransliterateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransliterateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransliterateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
