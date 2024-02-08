import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserAllmenuComponent } from './page-user-allmenu.component';

describe('PageUserAllmenuComponent', () => {
  let component: PageUserAllmenuComponent;
  let fixture: ComponentFixture<PageUserAllmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageUserAllmenuComponent]
    });
    fixture = TestBed.createComponent(PageUserAllmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
