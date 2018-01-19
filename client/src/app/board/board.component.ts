import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  colors = ['blue', 'red', 'yellow', 'black', 'green', 'white']
  scores = ['white', 'black']
  round = 12
  duplicates = false
  blanks = false
  score = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' }
  scoreArr = new Array(this.round).fill(this.score)
  guess = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' }
  guessArr = new Array(this.round).fill(this.guess)
  key = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' }
  mouseVal = 'none'
  currentRound = 0

  constructor() {}

  ngOnInit() {
    this.resetGame()
    this.generateKey()
  }

  resetGame() {
    if (this.blanks) {
      this.colors.push('none')
    } else {
      this.colors = ['blue', 'red', 'yellow', 'black', 'green', 'white']
    }

    if (this.duplicates) {
      this.duplicates = true
    } else {
      this.duplicates = false
    }

    this.score = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' }
    this.scoreArr = Array(this.round).fill(this.score)
    this.guess = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' }
    this.guessArr = Array(this.round).fill(this.guess)
    this.currentRound = 0
  }

  generateKey() {
    var numColors = this.colors.length
    var pos1Index = Math.floor(Math.random() * (numColors - 1))
    var pos2Index = Math.floor(Math.random() * (numColors - 1))
    var pos3Index = Math.floor(Math.random() * (numColors - 1))
    var pos4Index = Math.floor(Math.random() * (numColors - 1))
    if (!this.duplicates) {
      while (pos2Index == pos1Index) {
        var pos2Index = Math.floor(Math.random() * (numColors - 1))
      }
      while (pos3Index == pos2Index || pos3Index == pos1Index) {
        var pos3Index = Math.floor(Math.random() * (numColors - 1))
      }
      while (pos4Index == pos3Index || pos4Index == pos2Index || pos4Index == pos1Index) {
        var pos4Index = Math.floor(Math.random() * (numColors - 1))
      }
    }

    this.key = {
      pos1: this.colors[pos1Index],
      pos2: this.colors[pos2Index],
      pos3: this.colors[pos3Index],
      pos4: this.colors[pos4Index]
    }
  }

  getColor(color) {
    this.mouseVal = color
  }

  submitGuess() {}

  placeColorPos1() {
    this.guessArr[this.currentRound] = {
      pos1: this.mouseVal,
      pos2: this.guessArr[this.currentRound]['pos2'],
      pos3: this.guessArr[this.currentRound]['pos3'],
      pos4: this.guessArr[this.currentRound]['pos4']
    }
    this.mouseVal = 'none'
  }

  placeColorPos2() {
    this.guessArr[this.currentRound] = {
      pos1: this.guessArr[this.currentRound]['pos1'],
      pos2: this.mouseVal,
      pos3: this.guessArr[this.currentRound]['pos3'],
      pos4: this.guessArr[this.currentRound]['pos4']
    }
    this.mouseVal = 'none'
  }

  placeColorPos3() {
    this.guessArr[this.currentRound] = {
      pos1: this.guessArr[this.currentRound]['pos1'],
      pos2: this.guessArr[this.currentRound]['pos2'],
      pos3: this.mouseVal,
      pos4: this.guessArr[this.currentRound]['pos4']
    }
    this.mouseVal = 'none'
  }

  placeColorPos4() {
    this.guessArr[this.currentRound] = {
      pos1: this.guessArr[this.currentRound]['pos1'],
      pos2: this.guessArr[this.currentRound]['pos2'],
      pos3: this.guessArr[this.currentRound]['pos3'],
      pos4: this.mouseVal
    }
    this.mouseVal = 'none'
  }
}
