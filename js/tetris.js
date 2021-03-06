var canvas;
var ctx;
var FPS = 50;

var widthCanvas = 400;
var heightCanvas = 640;


var widthGameTable = 10;
var heightGameTable = 20;

var marginTop = 4;

var widthPiece = 40;
var heightPiece = 40;




//map of game table
// (12 x 17)-(10 x 16)
var gameTable = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var gameTableCopy = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//colors
var brown = '#74353B';
var pink = '#D39C9E';
var grey = '#545E52';
var blue = '#2F323D';
var green = '#9CBE21';
var orange = '#E35E27';
var yellow = '#DEB366';

//all piece and positions(angles)
var pieceGraphic = [
    [

        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    ],


    [
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0]
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [

            [0, 0, 0, 0],
            [0, 0, 3, 3],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 3, 0],
            [0, 0, 3, 3],
            [0, 0, 0, 3],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 3, 3],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 3, 0],
            [0, 0, 3, 3],
            [0, 0, 0, 3],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 0, 0],
            [0, 4, 4, 0],
            [0, 0, 4, 4],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 4],
            [0, 0, 4, 4],
            [0, 0, 4, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 4, 4, 0],
            [0, 0, 4, 4],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 4],
            [0, 0, 4, 4],
            [0, 0, 4, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 0, 0],
            [0, 5, 5, 5],
            [0, 5, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 5, 5],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 5],
            [0, 5, 5, 5],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 5, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 0, 0],
            [0, 6, 6, 6],
            [0, 0, 0, 6],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 6, 6],
            [0, 0, 6, 0],
            [0, 0, 6, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 6, 0, 0],
            [0, 6, 6, 6],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 6, 0],
            [0, 0, 6, 0],
            [0, 6, 6, 0],
            [0, 0, 0, 0]
        ]

    ],
    [
        [
            [0, 0, 0, 0],
            [0, 7, 7, 7],
            [0, 0, 7, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 7, 0],
            [0, 0, 7, 7],
            [0, 0, 7, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 7, 0],
            [0, 7, 7, 7],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 7, 0],
            [0, 7, 7, 0],
            [0, 0, 7, 0],
            [0, 0, 0, 0]
        ]
    ]


];

resetGameTable = function(){
    console.log('reset');

    for (py = 0; py < 21; py++) {
        for (px = 0; px < 12; px++){
            gameTable[py][px]=gameTableCopy[py][px];

        }
    }
}




var piece;

//piece builder
var objPiece = function () {
    this.x = 0;
    this.y = 0;

    this.angle = 0;
    this.type = 0;

    this.delay = 50;
    this.frame = 0;

    this.newPiece = function () {
        this.type = Math.floor(Math.random() * 7);
        this.y = 0;
        this.x = 4;

    };

    this.checkLose = function(){
        var lose = false;

        for(px=1; px<widthGameTable+1; px++){
          if(gameTable[2][px] > 0){
              lose = true;
            }
          }
        return lose;
    };


    this.lineCleaner = function(){

		var fullLine;

		for(py=marginTop;py<heightGameTable;py++){

			fullLine = true;	
			for(px=1;px<=widthGameTable+1;px++){
				if(gameTable[py][px]==0){
					fullLine = false;
				}
			}

			
			if(fullLine == true){
				console.log("clean");
				for(px=1;px<=widthGameTable+1;px++){
					gameTable[py][px] = 0;
				}
			}
		}

	};



    this.falling = function () {
        if (this.frame < this.delay) {
            this.frame++;
        } else {

            if(this.colision(this.angle, this.y+1, this.x)== false ){
            this.y++;
            this.frame = 0;
            }
            else{
               this.pinUp();
               this.lineCleaner();
               this.newPiece();
               if(this.checkLose()== true){
                 resetGameTable();  
               }
            }

            this.frame = 0;
        }
    };

    this.pinUp = function(){
        for (py = 0; py < 4; py++) {
            for (px = 0; px < 4; px++){
              if(pieceGraphic[this.type][this.angle][py][px]>0) {
                  gameTable [this.y+py][this.x+px] = pieceGraphic[this.type][this.angle][py][px];
              }
            }
        }

    };



    this.colision = function(newAngle, newY, newX){
        var result = false;

        for (py = 0; py < 4; py++) {
            for (px = 0; px < 4; px++){
                if(pieceGraphic[this.type][newAngle][py][px]>0){
                   if(gameTable[newY + py][newX + px]>0){
                       result = true;
                   } 
                }
            }
        }
        return result;
    };



    this.draw = function () {
        for (py = 0; py < 4; py++) {
            for (px = 0; px < 4; px++) {
                if (pieceGraphic[this.type][this.angle][py][px] != 0) {
                    if (pieceGraphic[this.type][this.angle][py][px] == 1)
                        ctx.fillStyle = brown;
                    if (pieceGraphic[this.type][this.angle][py][px] == 2)
                        ctx.fillStyle = grey;
                    if (pieceGraphic[this.type][this.angle][py][px] == 3)
                        ctx.fillStyle = pink;
                    if (pieceGraphic[this.type][this.angle][py][px] == 4)
                        ctx.fillStyle = orange;
                    if (pieceGraphic[this.type][this.angle][py][px] == 5)
                        ctx.fillStyle = blue;
                    if (pieceGraphic[this.type][this.angle][py][px] == 6)
                        ctx.fillStyle = yellow;
                    if (pieceGraphic[this.type][this.angle][py][px] == 7)
                        ctx.fillStyle = green;


                    ctx.fillRect((this.x + px - 1) * widthPiece, 
                    (this.y + py - marginTop) * heightPiece, widthPiece, heightPiece);

                }

            }

        }
    };

    this.rotate = function () {
        var newAngle =this.angle;

        if (newAngle < 3) {
            newAngle++;
        } else {
            newAngle = 0;
        }
        
        if(this.colision(newAngle, this.y, this.x) == false){
            this.angle = newAngle;
        }

        console.log('Rotate');
    };


    this.down = function () {
        if(this.colision(this.angle, this.y+1, this.x)== false ){
            this.y++;
            console.log('Down');  
        }
    };

    this.left = function () {
        if(this.colision(this.angle, this.y, this.x-1)== false ){
        this.x--;
        console.log('left');
        }
    };

    this.right = function () {
        if(this.colision(this.angle, this.y, this.x+1)== false ){
        this.x++;
        console.log('right');
        }
    };

    this.newPiece();

};

function drawGameTable() {
    for (py = marginTop; py < heightGameTable; py++) {
        for (px = 1; px < widthGameTable+1; px++) {
            if (gameTable[py][px] != 0) {
                if (gameTable[py][px] == 1)
                    ctx.fillStyle = brown;
                if (gameTable[py][px] == 2)
                    ctx.fillStyle = grey;
                if (gameTable[py][px] == 3)
                    ctx.fillStyle = pink;
                if (gameTable[py][px] == 4)
                    ctx.fillStyle = orange;
                if (gameTable[py][px] == 5)
                    ctx.fillStyle = blue;
                if (gameTable[py][px] == 6)
                    ctx.fillStyle = yellow;
                if (gameTable[py][px] == 7)
                    ctx.fillStyle = green;





                ctx.fillRect((px - 1) * widthPiece, (py - marginTop) * heightPiece, widthPiece, heightPiece);

            }

        }

    }
}




function initKeyboard() {
    document.addEventListener('keydown', function (myKey) {
        if (myKey.keyCode == 38) {
            piece.rotate();
        }
        if (myKey.keyCode == 40) {
            piece.down();
        }
        if (myKey.keyCode == 37) {
            piece.left();
        }
        if (myKey.keyCode == 39) {
            piece.right();
        }
    });
}


function mainF() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.style.width = widthCanvas;
    canvas.style.height = heightCanvas;

    piece = new objPiece();

    initKeyboard();

    setInterval(function () {
        mainFunction();
    }, 1000 / FPS);

};



function cleanCanvas() {
    canvas.width = widthCanvas;
    canvas.height = heightCanvas;
};


function mainFunction() {
    cleanCanvas();
    drawGameTable()
    piece.falling();
    piece.draw();
    // console.log('bucle');

};