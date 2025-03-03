import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FollowThePathComponent } from './follow-the-path.component';
import {provideRouter, RouterLinkWithHref} from '@angular/router';
import { DebugElement } from '@angular/core';
import {By} from "@angular/platform-browser";
describe('FollowThePathComponent', () => {

  let component: FollowThePathComponent;
  let fixture: ComponentFixture<FollowThePathComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowThePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugEl = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 5 <a> tag', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const links = compiled.querySelectorAll('a');
      expect(links.length).toBe(5);
  });

  it('should have proper link to home page', () => {
      fixture.detectChanges();

      const linkDebugElement = debugEl.query(By.directive(RouterLinkWithHref));
      const link = linkDebugElement.nativeElement as HTMLAnchorElement;

      expect(link.getAttribute('href')).toBe('/home');
  });
})
