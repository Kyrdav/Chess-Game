<html>
<head>
  <style>
    /* Add some styles to make the chessboard look nice */
    #board {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);
      width: 500px;
      height: 500px;
    }
    .square {
      background-color: #fff;
      border: 1px solid #000;
      box-sizing: border-box;
    }
    .square.black {
      background-color: #000;
    }
    .piece {
      width: 100%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  </style>
</head>
<body>
  <!-- Create a container element to hold the chessboard -->
  <div id="board"></div>

  <script>
    // Create an 8x8 array to represent the chessboard
    const board = Array(8).fill(null).map(() => Array(8).fill(null));

    // Initialize the board with the starting positions of the pieces
    board[0][0] = { piece: 'rook', color: 'black' };
    board[0][1] = { piece: 'knight', color: 'black' };
    board[0][2] = { piece: 'bishop', color: 'black' };
    board[0][3] = { piece: 'queen', color: 'black' };
    board[0][4] = { piece: 'king', color: 'black' };
    board[0][5] = { piece: 'bishop', color: 'black' };
    board[0][6] = { piece: 'knight', color: 'black' };
    board[0][7] = { piece: 'rook', color: 'black' };
    for (let i = 0; i < 8; i++) {
      board[1][i] = { piece: 'pawn', color: 'black' };
    }
    board[7][0] = { piece: 'rook', color: 'white' };
    board[7][1] = { piece: 'knight', color: 'white' };
    board[7][2] = { piece: 'bishop', color: 'white' };
    board[7][3] = { piece: 'queen', color: 'white' };
    board[7][4] = { piece: 'king', color: 'white' };
    board[7][5] = { piece: 'bishop', color: 'white' };
    board[7][6] = { piece: 'knight', color: 'white' };
    board[7][7] = { piece: 'rook', color: 'white' };
    for (let i = 0; i < 8; i++) {
      board[6][i] = { piece: 'pawn', color: 'white' };
    }

    // Create an HTML element for each square on the board
    for (let i = 0;
