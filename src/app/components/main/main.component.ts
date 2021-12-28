import {Component, OnInit} from '@angular/core';
import {WordListService} from "../../services/word-list.service";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  wordList$ = this.wordList.getWordList();
  joinedTeam = {
    joinedRedOperative: false,
    joinedRedSpymaster: false,
    joinedBlueOperative: false,
    joinedBlueSpymaster: false
  };

  wordColor: "red" | "blue" | "bomb" | "neutral" = "neutral"

  constructor(private wordList: WordListService) {

  }

  joinRedOperative() {
    this.joinedTeam.joinedRedOperative = true;
    this.joinedTeam.joinedRedSpymaster = false;
    this.joinedTeam.joinedBlueOperative = false;
    this.joinedTeam.joinedBlueSpymaster = false;

    console.log("join to red operative")
  }

  joinRedSpymaster() {
    this.joinedTeam.joinedRedOperative = false;
    this.joinedTeam.joinedRedSpymaster = true;
    this.joinedTeam.joinedBlueOperative = false;
    this.joinedTeam.joinedBlueSpymaster = false;

    console.log("join to red spymaster")
  }

  joinBlueOperative() {
    this.joinedTeam.joinedRedOperative = false;
    this.joinedTeam.joinedRedSpymaster = false;
    this.joinedTeam.joinedBlueOperative = true;
    this.joinedTeam.joinedBlueSpymaster = false;

    console.log("join to blue operative")
  }

  joinBlueSpymaster() {
    this.joinedTeam.joinedRedOperative = false;
    this.joinedTeam.joinedRedSpymaster = false;
    this.joinedTeam.joinedBlueOperative = false;
    this.joinedTeam.joinedBlueSpymaster = true;

    console.log("join to blue spymaster")
  }

  pickCard(id: string) {
    // console.log(id)
    // this.word$.pipe(map(w => w.id == id ? console.log(w) : '')).subscribe()
    this.wordList$.pipe(map(words => words.map((w: any) => w.id == id ? console.log(w.team) : ''))).subscribe()

    // console.log(this.word$.pipe(filter(word=>wor)).subscribe(console.log))
  }

  ngOnInit(): void {
  }

}
