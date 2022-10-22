import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    });
  });

  it('Shold create the app', () => {
    let fixtrue = TestBed.createComponent(UserComponent);
    let app = fixtrue.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    let fixtrue = TestBed.createComponent(UserComponent);
    let app = fixtrue.debugElement.componentInstance;
    let userService = fixtrue.debugElement.injector.get(UserService);
    fixtrue.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('Should display the user name if user logged in', () => {
    let fixtrue = TestBed.createComponent(UserComponent);
    let app = fixtrue.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixtrue.detectChanges();
    let compiled = fixtrue.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it("Should't display the user name if user not logged in", () => {
    let fixtrue = TestBed.createComponent(UserComponent);
    let app = fixtrue.debugElement.componentInstance;
    fixtrue.detectChanges();
    let compiled = fixtrue.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(
      app.user.name
    );
  });
});
