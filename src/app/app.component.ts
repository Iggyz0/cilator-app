import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor(private localStorageService: LocalstorageService) {  }

  isDarkTheme: boolean = true;
  userAgent = navigator.userAgent.toLowerCase();
  isElectron: boolean = false;


  ngOnInit() {
    this.getThemePreferenceFromLocalStorage();

    this.isElectronRunning();

    if (this.isElectron) {
      this.loadScript("assets/renderer.js");
    }
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

  isElectronRunning() {
    if (this.userAgent.indexOf(' electron/') > -1) {
      this.isElectron = true;
    } else {
      this.isElectron = false;
    }
  }

  private loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
