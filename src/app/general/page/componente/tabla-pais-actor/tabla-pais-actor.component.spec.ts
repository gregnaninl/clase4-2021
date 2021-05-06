import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPaisActorComponent } from './tabla-pais-actor.component';

describe('TablaPaisActorComponent', () => {
  let component: TablaPaisActorComponent;
  let fixture: ComponentFixture<TablaPaisActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPaisActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPaisActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
