import { Component } from '@angular/core';

@Component({
  selector: 'app-signin-callback',
  styles: [],
  template: '<div></div>',
})
export class SigninCallbackComponent{
  constructor(){}

  /*
   * The logic of this component is handled in auth.service.login()
   * and has been added as an entrypoint for the signin-callback route.
   */
}
