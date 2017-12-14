import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FretboardService {

  constructor(private db: AngularFireDatabase) {}

  getScales(): Observable<any[]> {
    return this.db.list(`scales`).valueChanges().share();    
  }

  getCurrentNote(): Observable<any> {
    return this.db.object('current_note').valueChanges().share();
  }
}
