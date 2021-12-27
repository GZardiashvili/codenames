import {Component, OnInit} from '@angular/core';
import {WordListService} from "../../services/word-list.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  word$ = this.wordList.getWordList();


  constructor(private wordList: WordListService) {

  }


  ngOnInit(): void {
  }

}
