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
  duplicates
  blanks
  score = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' }
  scoreArr = new Array(this.round).fill(this.score)
  guess = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' }
  guessArr = new Array(this.round).fill(this.guess)
  key = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' }
  mouseVal = 'none'
  currentRound = 0
  gameOverLay = false
  win = false

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
    this.generateKey()
    this.gameOverLay = false
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

  submitGuess() {
    var currGuess = this.guessArr[this.currentRound]
    var white = 0
    var black = 0
    var keyW = 0,
      keyG = 0,
      keyB = 0,
      keyY = 0,
      keyR = 0,
      keyBlck = 0
    var guessW = 0,
      guessG = 0,
      guessB = 0,
      guessY = 0,
      guessR = 0,
      guessBlck = 0
    if (this.blanks) {
      var keyBlnk = 0,
        guessBlnk = 0
    }

    for (var k in this.key) {
      if (this.key[k] == currGuess[k]) {
        black++
      } else {
        switch (this.key[k]) {
          case 'white':
            keyW++
            break
          case 'black':
            keyBlck++
            break
          case 'blue':
            keyB++
            break
          case 'red':
            keyR++
            break
          case 'yellow':
            keyY++
            break
          case 'green':
            keyG++
            break
          case 'none':
            keyBlnk++
            break
        }
        switch (currGuess[k]) {
          case 'white':
            guessW++
            break
          case 'black':
            guessBlck++
            break
          case 'blue':
            guessB++
            break
          case 'red':
            guessR++
            break
          case 'yellow':
            guessY++
            break
          case 'green':
            guessG++
            break
          case 'none':
            guessBlnk++
            break
        }
      }
    }

    if (black == 4) {
      this.win = true
      this.gameOver()
    } else {
      while (keyW > 0 && guessW > 0) {
        keyW--
        guessW--
        white++
      }
      while (keyB > 0 && guessB > 0) {
        keyB--
        guessB--
        white++
      }
      while (keyG > 0 && guessG > 0) {
        keyG--
        guessG--
        white++
      }
      while (keyY > 0 && guessY > 0) {
        keyY--
        guessY--
        white++
      }
      while (keyR > 0 && guessR > 0) {
        keyR--
        guessR--
        white++
      }
      while (keyBlck > 0 && guessBlck > 0) {
        keyBlck--
        guessBlck--
        white++
      }
      while (keyBlnk > 0 && guessBlnk > 0) {
        keyBlnk--
        guessBlnk--
        white++
      }
    }

    var rndScore = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' }
    var x = 0
    var pos = ['pos1', 'pos2', 'pos3', 'pos4']
    while (black > 0 || white > 0) {
      if (black > 0) {
        rndScore[pos[x]] = 'black'
        black--
        x++
      } else if (white > 0) {
        rndScore[pos[x]] = 'white'
        white--
        x++
      }
    }

    this.updateScore(rndScore)

    this.currentRound++
    if (this.currentRound + 1 >= this.round) {
      this.gameOver()
    }
  }

  updateScore(scoreDict) {
    this.scoreArr[this.currentRound] = {
      pos1: scoreDict['pos1'],
      pos2: scoreDict['pos2'],
      pos3: scoreDict['pos3'],
      pos4: scoreDict['pos4']
    }
  }

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

  gameOver() {
    this.gameOverLay = true
  }
}
