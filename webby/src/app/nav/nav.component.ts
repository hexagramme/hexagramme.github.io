//Imports
import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Page } from './page';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  //Variable declaration 
  protected landing:Page = {
    pageTitle: "landing",
    pageDescription: "a home page for this lovely website"
  }

  protected dashboard:Page = {
    pageTitle: "dashboard",
    pageDescription: "a dashboard showcasing some fun stuff and things"
  }

  protected pages:Page[] = [this.landing, this.dashboard];
  
  private breakpointObserver = inject(BreakpointObserver);

  //Functions
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    ); 

  //Getters and Setters
  getPages(): Page[] {
    return this.pages;
  };
  setPages(newPages:Page[]) {
    this.pages = newPages;
  };



  
}

