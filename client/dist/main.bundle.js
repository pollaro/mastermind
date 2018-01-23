webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__board_board_component__ = __webpack_require__("../../../../../src/app/board/board.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__board_board_component__["a" /* BoardComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gutter {\n  width: 30%;\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  vertical-align: middle;\n}\n\n.left {\n  margin-left: 3%;\n}\n\n.options {\n  text-align: right;\n  display: inline-block;\n  border: thin solid black;\n  padding: 1%;\n  margin-left: 1%;\n}\n\n.options input,\n.options label,\n.options select,\n.options button {\n  margin-top: 5%;\n  font-size: 1.1em;\n}\n\n#rules {\n  border: thin solid black;\n  padding: 1%;\n  margin-right: 1%;\n}\n\n#rules p {\n  font-size: 1.2em;\n  font-weight: bold;\n}\n\n#rules ul {\n  list-style-type: circle;\n  list-style-position: inside;\n  margin-left: 3%;\n}\n\n#rules ol {\n  list-style-type: decimal;\n  list-style-position: inside;\n}\n\n#boardContainer {\n  margin-top: 3%;\n  background-color: #6d6d6d;\n  padding-left: 1%;\n  max-width: 25%;\n  border-radius: 16px;\n}\n.cursorVal {\n  vertical-align: middle;\n  text-align: center;\n}\n\n.pegSlots,\n.peg,\n.scoreSlots,\n.score,\n.scoreRow,\n.cursorSlot {\n  display: inline-block;\n}\n\n.scoreRow {\n  width: 4%;\n}\n\n.pegSlots,\n.scoreSlots,\n.cursorSlot {\n  display: inline;\n}\n\n.colorPegs img:hover {\n  cursor: pointer;\n}\n\n.peg {\n  width: 10%;\n  margin-left: 0%;\n}\n\n.peg img,\n.score img {\n  width: 100%;\n}\n\n.score {\n  /*width: 5%;*/\n  margin-left: -1%;\n}\n\n.fancyButton {\n  border: none;\n  border-radius: 6px;\n  margin-left: 33%;\n  margin-bottom: 3%;\n  padding: 2%;\n  min-width: 40%;\n}\n\n.submit {\n  width: 33%;\n  font-size: 1.1em;\n}\n\n.hidden {\n  display: none;\n}\n\n.gameOverDiv {\n  text-align: center;\n  margin-top: 20%;\n  font-size: 1.5rem;\n}\n\n#menu-left,\n#menu-right,\n.mobile {\n  display: none;\n}\n\n@media only screen and (max-width: 480px) {\n  .left {\n    margin-left: 0%;\n  }\n\n  #rules,\n  #options {\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 10;\n    background-color: white;\n    padding: 1%;\n  }\n\n  #rules {\n    width: 93%;\n  }\n\n  #options {\n    width: 40%;\n  }\n\n  .mobile {\n    display: inline;\n  }\n\n  .closeButton {\n    float: right;\n    border: none;\n    background-color: transparent;\n    font-size: 1.2rem;\n  }\n\n  #menu-left {\n    display: inline;\n    padding: 1%;\n    padding-left: 0%;\n    width: 45%;\n    text-align: left;\n    float: left;\n  }\n\n  #menu-right {\n    display: inline;\n    padding: 1%;\n    margin-right: 1%;\n    float: right;\n    text-align: right;\n    width: 45%;\n  }\n\n  #menu-left button,\n  #menu-right button {\n    background-color: transparent;\n    border: black thin solid;\n    padding: 2%;\n    border-radius: 2px;\n  }\n\n  #boardContainer {\n    max-width: 98%;\n    width: 98%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mobile\" id=\"menu-left\">\n    <button type=\"button\" (click)=\"openRules()\">Rules</button>\n</div>\n<div class=\"mobile\" id=\"menu-right\">\n    <button type=\"button\" (click)=\"openOptions()\">Options</button>\n</div>\n<div class=\"gutter left\" id=\"rules\">\n    <button class=\"mobile closeButton\" type=\"button\" (click)=closeRules()>&times;</button><br class=\"mobile\"><br class=\"mobile\">\n    <p>The object of the game is to guess the colors and order of randomly selected pegs</p>\n    <br>\n    <ol>\n        <li>Click one of the colors in the top row</li>\n        <li>Click on the position you would like to place it in the next available row</li>\n        <li>Fill up the remaining positions</li>\n        <li>Press Submit</li>\n        <li>Scoring:</li>\n        <ul>\n            <li>Black = One color is correct AND in the correct position</li>\n            <li>White = One color is correct but NOT in the correct position</li>\n        </ul>\n    </ol>\n</div>\n\n\n<div class=\"gutter center\" id=\"boardContainer\">\n    <div class=\"key row\">\n        <div class=\"key pegSlots\">\n            <div class=\"peg\"></div>\n            <div class=\"peg\"></div>\n            <div class=\"peg\"></div>\n            <div class=\"peg\"></div>\n        </div>\n    </div>\n    <div class=\"pegSlots colorPegs\">\n        <div class=\"peg\" (click)=\"getColor('black')\"><img src=\"../assets/images/black.png\" alt=\"Black Peg\"></div>\n        <div class=\"peg\" (click)=\"getColor('blue')\"><img src=\"../assets/images/blue.png\" alt=\"Blue Peg\"></div>\n        <div class=\"peg\" (click)=\"getColor('green')\"><img src=\"../assets/images/green.png\" alt=\"Green Peg\"></div>\n        <div class=\"peg\" (click)=\"getColor('red')\"><img src=\"../assets/images/red.png\" alt=\"Red Peg\"></div>\n        <div class=\"peg\" (click)=\"getColor('white')\"><img src=\"../assets/images/white.png\" alt=\"White Peg\"></div>\n        <div class=\"peg\" (click)=\"getColor('yellow')\"><img src=\"../assets/images/yellow.png\" alt=\"Yellow Peg\"></div>\n    </div>\n    <div *ngFor=\"let r of guessArr, let idx=index\" class=\"row\">\n        <div class=\"pegSlots\">\n            <div class=\"peg\" (click)=\"placeColorPos1()\"><img src=\"../assets/images/{{guessArr[idx]['pos1']}}.png\" alt=\"Row {{idx}}, pos 1\"></div>\n            <div class=\"peg\" (click)=\"placeColorPos2()\"><img src=\"../assets/images/{{guessArr[idx]['pos2']}}.png\" alt=\"Row {{idx}}, pos 2\"></div>\n            <div class=\"peg\" (click)=\"placeColorPos3()\"><img src=\"../assets/images/{{guessArr[idx]['pos3']}}.png\" alt=\"Row {{idx}}, pos 3\"></div>\n            <div class=\"peg\" (click)=\"placeColorPos4()\"><img src=\"../assets/images/{{guessArr[idx]['pos4']}}.png\" alt=\"Row {{idx}}, pos 4\"></div>\n        </div>\n        <div class=\"scoreSlots\">\n            <div class=\"scoreRow\">\n                <div class=\"score\"><img src=\"../assets/images/{{scoreArr[idx]['pos1']}}.png\" alt=\"Row {{idx}}, score 1\"></div>\n                <div class=\"score\"><img src=\"../assets/images/{{scoreArr[idx]['pos2']}}.png\" alt=\"Row {{idx}}, score 2\"></div>\n            </div>\n            <div class=\"scoreRow\">\n                <div class=\"score\"><img src=\"../assets/images/{{scoreArr[idx]['pos3']}}.png\" alt=\"Row {{idx}}, score 3\"></div>\n                <div class=\"score\"><img src=\"../assets/images/{{scoreArr[idx]['pos4']}}.png\" alt=\"Row {{idx}}, score 4\"></div>\n            </div>\n        </div>\n    </div>\n    <br>\n    <div class=\"cursorVal\">\n        <p>Current Selection:</p>\n        <div class=\"cursorSlot\">\n            <div class=\"peg\">\n                <img src=\"../assets/images/{{mouseVal}}.png\" alt=\"Current Selection\">\n            </div>\n        </div>\n    </div>\n    <br>\n    <button class=\"submit fancyButton\" type=\"button\" (click)='submitGuess()'>Submit</button>\n</div>\n\n<div class=\"gutter right\"id=\"options\">\n    <div class=\"options\">\n        <button class=\"mobile closeButton\" type=\"button\" (click)=closeOptions()>&times;</button><br class=\"mobile\"><br class=\"mobile\">\n        <label for=\"blanks\">Blanks used?</label> <input type=\"checkbox\" [(ngModel)]=\"blanks\"><br>\n        <label for=\"duplicates\">Duplicates allowed?</label> <input type=\"checkbox\" [(ngModel)]=\"duplicates\"><br>\n        <label for=\"round\">Rounds:</label> <select [(ngModel)]=\"round\">\n            <option value=\"8\">8</option>\n            <option value=\"12\" selected>12</option>\n            <option value=\"16\">16</option>\n        </select><br>\n        <button class=\"fancyButton\" type=\"button\" (click)='resetGame()'>Reset</button>\n    </div>\n    <br>\n    <div [ngClass]=\"{'hidden':!gameOverLay,'gameOverDiv':true}\">\n        <div>\n            <p *ngIf=\"!win\">Sorry, you didn't get the answer. Press reset to play again</p>\n            <p *ngIf=\"win\">Congratulations! You got it! Press reset to play again</p>\n            <br>\n            <div class=\"pegSlots\">\n                <div class=\"peg\"><img src=\"../assets/images/{{key['pos1']}}.png\" alt=\"Row {{idx}}, pos 1\"></div>\n                <div class=\"peg\"><img src=\"../assets/images/{{key['pos2']}}.png\" alt=\"Row {{idx}}, pos 2\"></div>\n                <div class=\"peg\"><img src=\"../assets/images/{{key['pos3']}}.png\" alt=\"Row {{idx}}, pos 3\"></div>\n                <div class=\"peg\"><img src=\"../assets/images/{{key['pos4']}}.png\" alt=\"Row {{idx}}, pos 4\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardComponent = (function () {
    function BoardComponent() {
        this.colors = ['blue', 'red', 'yellow', 'black', 'green', 'white'];
        this.scores = ['white', 'black'];
        this.round = 12;
        this.score = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' };
        this.scoreArr = new Array(this.round).fill(this.score);
        this.guess = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' };
        this.guessArr = new Array(this.round).fill(this.guess);
        this.key = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' };
        this.mouseVal = 'none';
        this.currentRound = 0;
        this.gameOverLay = false;
        this.win = false;
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.resetGame();
    };
    BoardComponent.prototype.resetGame = function () {
        if (this.blanks) {
            this.colors.push('none');
        }
        else {
            this.colors = ['blue', 'red', 'yellow', 'black', 'green', 'white'];
        }
        if (this.duplicates) {
            this.duplicates = true;
        }
        else {
            this.duplicates = false;
        }
        this.score = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' };
        this.scoreArr = Array(this.round).fill(this.score);
        this.guess = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' };
        this.guessArr = Array(this.round).fill(this.guess);
        this.currentRound = 0;
        this.generateKey();
        this.gameOverLay = false;
    };
    BoardComponent.prototype.generateKey = function () {
        var numColors = this.colors.length;
        var pos1Index = Math.floor(Math.random() * (numColors - 1));
        var pos2Index = Math.floor(Math.random() * (numColors - 1));
        var pos3Index = Math.floor(Math.random() * (numColors - 1));
        var pos4Index = Math.floor(Math.random() * (numColors - 1));
        if (!this.duplicates) {
            while (pos2Index == pos1Index) {
                var pos2Index = Math.floor(Math.random() * (numColors - 1));
            }
            while (pos3Index == pos2Index || pos3Index == pos1Index) {
                var pos3Index = Math.floor(Math.random() * (numColors - 1));
            }
            while (pos4Index == pos3Index || pos4Index == pos2Index || pos4Index == pos1Index) {
                var pos4Index = Math.floor(Math.random() * (numColors - 1));
            }
        }
        this.key = {
            pos1: this.colors[pos1Index],
            pos2: this.colors[pos2Index],
            pos3: this.colors[pos3Index],
            pos4: this.colors[pos4Index]
        };
    };
    BoardComponent.prototype.getColor = function (color) {
        this.mouseVal = color;
    };
    BoardComponent.prototype.submitGuess = function () {
        var currGuess = this.guessArr[this.currentRound];
        var white = 0;
        var black = 0;
        var keyW = 0, keyG = 0, keyB = 0, keyY = 0, keyR = 0, keyBlck = 0;
        var guessW = 0, guessG = 0, guessB = 0, guessY = 0, guessR = 0, guessBlck = 0;
        if (this.blanks) {
            var keyBlnk = 0, guessBlnk = 0;
        }
        for (var k in this.key) {
            if (this.key[k] == currGuess[k]) {
                black++;
            }
            else {
                switch (this.key[k]) {
                    case 'white':
                        keyW++;
                        break;
                    case 'black':
                        keyBlck++;
                        break;
                    case 'blue':
                        keyB++;
                        break;
                    case 'red':
                        keyR++;
                        break;
                    case 'yellow':
                        keyY++;
                        break;
                    case 'green':
                        keyG++;
                        break;
                    case 'none':
                        keyBlnk++;
                        break;
                }
                switch (currGuess[k]) {
                    case 'white':
                        guessW++;
                        break;
                    case 'black':
                        guessBlck++;
                        break;
                    case 'blue':
                        guessB++;
                        break;
                    case 'red':
                        guessR++;
                        break;
                    case 'yellow':
                        guessY++;
                        break;
                    case 'green':
                        guessG++;
                        break;
                    case 'none':
                        guessBlnk++;
                        break;
                }
            }
        }
        if (black == 4) {
            this.win = true;
            this.gameOver();
        }
        else {
            while (keyW > 0 && guessW > 0) {
                keyW--;
                guessW--;
                white++;
            }
            while (keyB > 0 && guessB > 0) {
                keyB--;
                guessB--;
                white++;
            }
            while (keyG > 0 && guessG > 0) {
                keyG--;
                guessG--;
                white++;
            }
            while (keyY > 0 && guessY > 0) {
                keyY--;
                guessY--;
                white++;
            }
            while (keyR > 0 && guessR > 0) {
                keyR--;
                guessR--;
                white++;
            }
            while (keyBlck > 0 && guessBlck > 0) {
                keyBlck--;
                guessBlck--;
                white++;
            }
            while (keyBlnk > 0 && guessBlnk > 0) {
                keyBlnk--;
                guessBlnk--;
                white++;
            }
        }
        var rndScore = { pos1: 'none', pos2: 'none', pos3: 'none', pos4: 'none' };
        var x = 0;
        var pos = ['pos1', 'pos2', 'pos3', 'pos4'];
        while (black > 0 || white > 0) {
            if (black > 0) {
                rndScore[pos[x]] = 'black';
                black--;
                x++;
            }
            else if (white > 0) {
                rndScore[pos[x]] = 'white';
                white--;
                x++;
            }
        }
        this.updateScore(rndScore);
        this.currentRound++;
        if (this.currentRound + 1 >= this.round) {
            this.gameOver();
        }
    };
    BoardComponent.prototype.updateScore = function (scoreDict) {
        this.scoreArr[this.currentRound] = {
            pos1: scoreDict['pos1'],
            pos2: scoreDict['pos2'],
            pos3: scoreDict['pos3'],
            pos4: scoreDict['pos4']
        };
    };
    BoardComponent.prototype.placeColorPos1 = function () {
        this.guessArr[this.currentRound] = {
            pos1: this.mouseVal,
            pos2: this.guessArr[this.currentRound]['pos2'],
            pos3: this.guessArr[this.currentRound]['pos3'],
            pos4: this.guessArr[this.currentRound]['pos4']
        };
        this.mouseVal = 'none';
    };
    BoardComponent.prototype.placeColorPos2 = function () {
        this.guessArr[this.currentRound] = {
            pos1: this.guessArr[this.currentRound]['pos1'],
            pos2: this.mouseVal,
            pos3: this.guessArr[this.currentRound]['pos3'],
            pos4: this.guessArr[this.currentRound]['pos4']
        };
        this.mouseVal = 'none';
    };
    BoardComponent.prototype.placeColorPos3 = function () {
        this.guessArr[this.currentRound] = {
            pos1: this.guessArr[this.currentRound]['pos1'],
            pos2: this.guessArr[this.currentRound]['pos2'],
            pos3: this.mouseVal,
            pos4: this.guessArr[this.currentRound]['pos4']
        };
        this.mouseVal = 'none';
    };
    BoardComponent.prototype.placeColorPos4 = function () {
        this.guessArr[this.currentRound] = {
            pos1: this.guessArr[this.currentRound]['pos1'],
            pos2: this.guessArr[this.currentRound]['pos2'],
            pos3: this.guessArr[this.currentRound]['pos3'],
            pos4: this.mouseVal
        };
        this.mouseVal = 'none';
    };
    BoardComponent.prototype.gameOver = function () {
        this.gameOverLay = true;
        this.openOptions();
    };
    BoardComponent.prototype.openRules = function () {
        document.getElementById('rules').style.display = 'block';
    };
    BoardComponent.prototype.openOptions = function () {
        document.getElementById('options').style.display = 'block';
    };
    BoardComponent.prototype.closeRules = function () {
        document.getElementById('rules').style.display = 'none';
    };
    BoardComponent.prototype.closeOptions = function () {
        document.getElementById('options').style.display = 'none';
    };
    BoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-board',
            template: __webpack_require__("../../../../../src/app/board/board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map