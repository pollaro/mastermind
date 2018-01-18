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
  scoreArr = Array(this.round).fill(this.score)
  guess = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' }
  guessArr = Array(this.round).fill(this.guess)
  mouseVal = 'none'
  currentRound = 0

  constructor() {}

  ngOnInit() {
    this.resetGame()
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

  submitGuess() {}

  placeColor(pos) {
    this.guessArr[this.currentRound][pos] = this.mouseVal
    this.mouseVal = 'none'
  }

  getColor(color) {
    this.mouseVal = color
  }
}
