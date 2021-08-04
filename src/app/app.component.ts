import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  /**
   * To change navigation
   * @param anchorElementId String - Nav element name
   */
   changeNavigation(anchorElementId: string){
    document.getElementById(anchorElementId)?.scrollIntoView();
  }
}
