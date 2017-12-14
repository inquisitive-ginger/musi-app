import { Component, OnInit, Input } from '@angular/core';
import { FretboardService } from './fretboard.service';
import { Observable } from 'rxjs/Observable';

import _ from 'lodash';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.css']
})
export class FretboardComponent implements OnInit {
  availableScales: any[];
  availableForms: any[];
  selectedScale: any;
  selectedForm: any;
  currentNote: String;

  numberOfFrets: Number = 5;
  frets: Number[] = [];
  noteDisplay: String = 'note-name';
  noteList = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  noteIndexes = [];
  currentTestNoteIndex = 0;

  @Input() testMode: Boolean;
  currentTestNoteIndex = 0;
  currentScaleDirection = 'up'
  
  constructor(public fretboardService: FretboardService) { 
    for (let i = 0; i <= this.numberOfFrets; i++) {
      this.frets.push(i);
    }
  }

  ngOnInit() {
    this.fretboardService.getCurrentNote().subscribe(note => {
      this.currentNote = note;
      this.testMode && this.checkNote();
    })
    this.fretboardService.getScales().subscribe(scales => {
      this.availableScales = scales;
    })
  }

  getScaleDegree(dec): Number {
    return (dec >>> 2) & 7;
  }

  getFingerNumber(dec): Number {
    return (dec & 3) + 1;
  }

  getNoteName(dec): String {
    return this.noteList[dec >>> 5];
  }

  getNoteFamliy(note): String {
    let pattern = /[A-G]#?/i;
    return pattern.test(note) ? pattern.exec(note)[0] : '';
  }

  determineActive(stringIndex, noteIndex): Boolean {
    let finalIndex = noteIndex + 5*(5-stringIndex)
    return this.noteIndexes[this.currentTestNoteIndex][0] === finalIndex;
  }

  onScaleChange(event) {
    let scaleName = event.value;
    this.selectedScale = _.find(this.availableScales, { 'short_name': scaleName });
    this.availableForms = this.selectedScale ? _.map(this.selectedScale.forms, i => return i) : ['No forms found...'];
  }

  onFormChange(event) {
    let formName = event.value;
    this.selectedForm = _.find(this.availableForms, { 'name': formName });

    this.storeNoteIndexes();
  }

  storeNoteIndexes() {
    let strings = _.reverse(this.selectedForm.strings.slice());
    _.forEach(strings, (string, i) => {
      _.forEach(string.notes, (note, j) => {
        if ( note !== 0) {
          this.noteIndexes.push([j + 5*i, note]);
        }
      })
    })
  }

  checkNote() {
    let testNote= this.getNoteName(this.noteIndexes[this.currentTestNoteIndex][1]);
    let noteFamily = this.getNoteFamliy(this.currentNote);
    if (noteFamily === testNote) {
      this.currentScaleDirection === 'up' ? 
        this.currentTestNoteIndex++ : this.currentTestNoteIndex--;

      if (this.currentTestNoteIndex > this.noteIndexes.length - 1) {
        this.currentTestNoteIndex = this.noteIndexes.length - 2;
        this.currentScaleDirection = 'down';
      } else if (this.currentTestNoteIndex < 0) {
        this.currentTestNoteIndex = 1;
        this.currentScaleDirection = 'up';
      }
    }
  }
}
