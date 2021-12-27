import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WordListService {

  constructor(private http: HttpClient) {
  }

  getWordList() {
    return this.http.get<any>(`${environment.api}/word_list`)
  }

}
