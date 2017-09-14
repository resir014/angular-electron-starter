import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display @Input properties', () => {
    const props = {
      title: 'Angular Docs',
      description: 'Learn about the latest updates to the Angular framework.',
      linkText: 'View Angular Docs'
    };

    component.title = props.title;
    component.description = props.description;
    component.linkText = props.linkText;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').innerText).toEqual(props.title);
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual(props.description);
    expect(fixture.nativeElement.querySelector('a').innerText).toEqual(props.linkText);
  });
});
