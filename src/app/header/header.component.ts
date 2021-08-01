import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * ViewChild for overlayMenu
   */
   @ViewChild('overlayMenu') public overlayMenu!: OverlayPanel;

   /**
    * To hide overlay menu while scrolling
    */
   @HostListener('window:scroll', ['$event'])
   onScroll() {
     this.overlayMenu && this.overlayMenu.hide();
   }
 
   @Output() public onNavChange = new EventEmitter<string>();
 
   constructor() { }
 
   ngOnInit(): void {
   }
 
   menuItemClick(menu: string) {
     this.onNavChange.emit(menu);
     // To hide overlay menu
     this.overlayMenu.hide();
   }
}
