import {FollowThePathComponent} from "../follow-the-path.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DebugElement} from "@angular/core";
import {convertToParamMap, provideRouter, RouterLinkWithHref} from "@angular/router";
import {ParamHaterComponent} from "./param-hater.component";
import {By} from "@angular/platform-browser";
import {RouterTestingHarness} from "@angular/router/testing";

describe('ParamHaterComponent', () => {


  let component: ParamHaterComponent;
  let fixture: ComponentFixture<ParamHaterComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ provideRouter([{path: 'hate/:id' ,component: ParamHaterComponent}])]
    })
        .compileComponents();

    fixture = TestBed.createComponent(ParamHaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugEl = fixture.debugElement;
  });



  //Use RouterTestingHarness
  it('should display advice id', async () => {
    fixture.detectChanges();
    const harness = await RouterTestingHarness.create('/hate/5');
    const p = harness.fixture.debugElement.query(By.css('p:first-of-type')).nativeElement;

    expect(p.textContent).toBe('My job id to hate the advice: 5');
  });
});
