import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor(private localStorageService: LocalstorageService) {}

  isDarkTheme: boolean = true;

  ngOnInit() {
    this.getThemePreferenceFromLocalStorage();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme)
      this.localStorageService.setLocalStorageItem("theme", "dark");
    else
      this.localStorageService.setLocalStorageItem("theme", "light");
  }

  getThemePreferenceFromLocalStorage() {
    if(this.localStorageService.getLocalStorageItem("theme")) {
      if(this.localStorageService.getLocalStorageItem("theme")?.valueOf() == "dark") {
        this.isDarkTheme = true;
      }
      else
        this.isDarkTheme = false;
    }
  }
}
