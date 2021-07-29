import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransliterateService {

  constructor() { }

  // Serbian Latin and Cyrillic letters Map object
  letters = new Map([
    ["А", "A"],
    ["Б", "B"],
    ["В", "V"],
    ["Г", "G"],
    ["Д", "D"],
    ["Ђ", "Đ"],
    ["Е", "E"],
    ["Ж", "Ž"],
    ["З", "Z"],
    ["И", "I"],
    ["Ј", "J"],
    ["К", "K"],
    ["Л", "L"],
    ["Љ", "Lj"],
    ["М", "M"],
    ["Н", "N"],
    ["Њ", "Nj"],
    ["О", "O"],
    ["П", "P"],
    ["Р", "R"],
    ["С", "S"],
    ["Т", "T"],
    ["Ћ", "Ć"],
    ["У", "U"],
    ["Ф", "F"],
    ["Х", "H"],
    ["Ц", "C"],
    ["Ч", "Č"],
    ["Џ", "Dž"],
    ["Ш", "Š"],

    ["а", "a"],
    ["б", "b"],
    ["в", "v"],
    ["г", "g"],
    ["д", "d"],
    ["ђ", "đ"],
    ["е", "e"],
    ["ж", "ž"],
    ["з", "z"],
    ["и", "i"],
    ["ј", "j"],
    ["к", "k"],
    ["л", "l"],
    ["љ", "lj"],
    ["м", "m"],
    ["н", "n"],
    ["њ", "nj"],
    ["о", "o"],
    ["п", "p"],
    ["р", "r"],
    ["с", "s"],
    ["т", "t"],
    ["ћ", "ć"],
    ["у", "u"],
    ["ф", "f"],
    ["х", "h"],
    ["ц", "c"],
    ["ч", "č"],
    ["џ", "dž"],
    ["ш", "š"],

    ["A", "А"],
    ["B", "Б"],
    ["V", "В"],
    ["G", "Г"],
    ["D", "Д"],
    ["Đ", "Ђ"],
    ["E", "Е"],
    ["Ž", "Ж"],
    ["Z", "З"],
    ["I", "И"],
    ["J", "Ј"],
    ["K", "К"],
    ["L", "Л"],
    ["M", "М"],
    ["N", "Н"],
    ["O", "О"],
    ["P", "П"],
    ["R", "Р"],
    ["S", "С"],
    ["T", "Т"],
    ["Ć", "Ћ"],
    ["U", "У"],
    ["F", "Ф"],
    ["H", "Х"],
    ["C", "Ц"],
    ["Č", "Ч"],
    ["Š", "Ш"],

    ["a", "а"],
    ["b", "б"],
    ["v", "в"],
    ["g", "г"],
    ["d", "д"],
    ["đ", "ђ"],
    ["e", "е"],
    ["ž", "ж"],
    ["z", "з"],
    ["i", "и"],
    ["j", "ј"],
    ["k", "к"],
    ["l", "л"],
    ["m", "м"],
    ["n", "н"],
    ["o", "о"],
    ["p", "п"],
    ["r", "р"],
    ["s", "с"],
    ["t", "т"],
    ["ć", "ћ"],
    ["u", "у"],
    ["f", "ф"],
    ["h", "х"],
    ["c", "ц"],
    ["č", "ч"],
    ["š", "ш"],

    ["", ""]
  ]);

  // After converting from Serbian Latin to Serbian Cyrillic,
  // we need to replace additional letters
  extraLetterObjects = [
    { Лј: "Љ" },
    { Нј: "Њ"},
    { Дж: "Џ" },
    { лј: "љ" },
    { нј: "њ" },
    { дж: "џ" },
  ]

  transliterateLetter(letter: string) {
    if (!this.letters.has(letter)) {
      return letter;
    }
    return this.letters.get(letter);
  }

  transliterate(text: string) {
    if (text == null || text == "") {
      return "";
    }

    // return text.split("").map(letter => this.transliterateLetter(letter)).join('');  <-- slower, but clearer method
    let tmp = text.trim().split("").reduce((prevVal, letter, idx) => {return prevVal + this.transliterateLetter(letter)}, "");

    // return tmp.replace(/\b(?:Лј|Нј|Дж|лј|нј|дж)\b/gui, matched => this.extraLetters.get(matched));  <-- doesn't work for cyrillic letters
    // return this.extraLetterObjects.reduce((f, s) => `${f}`.replace(Object.keys(s)[0], s[Object.keys(s)[0]]), tmp)  <-- replaces only the first found match

    // replaces all found matches (global)
    // https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings  (Emmanuel N K)
    return this.extraLetterObjects.reduce((f, s) => `${f}`.replace(new RegExp(Object.keys(s)[0],'g'), s[Object.keys(s)[0]]), tmp); 

  }
}
