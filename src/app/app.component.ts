import { Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <div id="preloader">
        <div id="status"></div>
      </div>
      <First-Screen></First-Screen>
      <Header-Screen></Header-Screen>`
})
export class AppComponent {}
