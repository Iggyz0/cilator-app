import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TransliterateService } from '../services/transliterate.service';

@Component({
  selector: 'app-transliterate',
  templateUrl: './transliterate.component.html',
  styleUrls: ['./transliterate.component.css']
})
export class TransliterateComponent implements OnInit {

  constructor(private transliterateService: TransliterateService, private clipboard: Clipboard) { }

  result: string = "";
  file: any;
  fileName: string;

  @ViewChild('from') userInput;

  ngOnInit(): void {
  }

  startTransliterate(text: string) {
    this.result = this.transliterateService.transliterate(text);
  }

  onFileSelected(e) {
    if (e.target.files[0] != null) {
      this.file = e.target.files[0];
      this.fileName = e.target.files[0].name;
  
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.result = this.transliterateService.transliterate(fileReader.result.toString());
      }
      fileReader.readAsText(this.file);
    }
  }

  // We use beginCopy() if we are copying a large amount of text; it returns PendingCopy object
  // https://material.angular.io/cdk/clipboard/overview
  copyInput() {
    const pending = this.clipboard.beginCopy(this.userInput.nativeElement.value);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        // When we are finsihed, we clean up by calling destroy() on PendingCopy object
        pending.destroy();
      }
    };
    attempt();
  }

  copyResult() {
    const pending = this.clipboard.beginCopy(this.result);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        pending.destroy();
      }
    };
    attempt();
  }

  reset() {
    this.result = "";
    this.file = null;
    this.fileName = "";
    this.userInput.nativeElement.value = "";
  }
}
