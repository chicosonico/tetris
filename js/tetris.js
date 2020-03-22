var canvas;
var ctx;
var FPS = 50;

var widthCanvas = 400;
var heightCanvas = 640;


var widthGameTable = 10;
var heightGameTable = 10;

var widthPiece = 40;
var heightPiece = 40;





// (12 x 17)-(10 x 16)
var gameTable = [
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
];

var pieceGraphic = [
    [
        
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ]
    ],


    [
     [
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0]
    ],
    [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
    ],
    [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
    ]
],
    [
        [
        
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
    ],
    [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
    ],
    [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
    ]
],
    [
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
    ],
    [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
    ],
    [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
    ]
],
    [
        [
        [0,0,0,0],
        [0,5,5,5],
        [0,5,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,5,0],
        [0,0,5,0],
        [0,0,5,5],
        [0,0,0,0]
    ],
    [
        [0,0,0,5],
        [0,5,5,5],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,5,5,0],
        [0,0,5,0],
        [0,0,5,0],
        [0,0,0,0]
    ]
],
    [
        [
        [0,0,0,0],
        [0,6,6,6],
        [0,0,0,6],
        [0,0,0,0]
    ],
    [
        [0,0,6,6],
        [0,0,6,0],
        [0,0,6,0],
        [0,0,0,0]
    ],
    [
        [0,6,0,0],
        [0,6,6,6],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,6,0],
        [0,0,6,0],
        [0,6,6,0],
        [0,0,0,0]
    ]
    
],
    [
        [
        [0,0,0,0],
        [0,7,7,7],
        [0,0,7,0],
        [0,0,0,0]
    ],
    [
        [0,0,7,0],
        [0,0,7,7],
        [0,0,1,0],
        [0,0,0,0]
    ],
    [
        [0,0,7,0],
        [0,7,7,7],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,7,0],
        [0,7,7,0],
        [0,0,7,0],
        [0,0,0,0]
    ]
]
    

];
 



var piece;

var objPiece = function(){
    this.x = 5;
    this.y = 7;

    this.angle = 3;
    this.type = 1;

    this.draw = function(){
        for(py=0; py<4; py++){
            for(px=0; px<4; px++){
                if(pieceGraphic[this.type][this.angle][py][px]!= 0){
                    ctx.fillStyle = "#7777777";
                    ctx.fillRect( (this.x + px)*widthPiece, (this.y + py)*heightPiece, widthPiece, heightPiece);

                }
          
            }

        }
    };

    this.rotate = function(){
        console.log('Rotate');
    };

    this.down = function(){
        console.log('Down');
    };

    this.left = function(){
        console.log('left');
    };

    this.right = function(){
        console.log('right');
    };
 
};

function initKeyboard(){
    document.addEventListener('keydown', function(myKey){
    if(myKey.keyCode == 38){
        piece.rotate();   
    }
    if(myKey.keyCode == 40){
        piece.down();
    }
    if(myKey.keyCode == 37){
        piece.left();   
    }
    if(myKey.keyCode == 39){
        piece.right(); 
    }
    });
}


function myFunction(){
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

canvas.style.width = widthCanvas;
canvas.style.height = heightCanvas;

piece = new objPiece();

initKeyboard();

setInterval(function(){
    mainFunction();
   }, 1000/FPS);

};



function cleanCanvas(){
canvas.width = widthCanvas;
canvas.height = heightCanvas;
};


function mainFunction(){
    cleanCanvas();
    piece.draw();
// console.log('bucle');

};