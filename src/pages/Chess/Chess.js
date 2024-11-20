import "./Styles/Chess.css";
import { useCallback, useState } from "react";
import { Space } from "./Space";

function Chess() {
  /*
    Naming Convention
    Piece: xy
    x -> Color {b=Black, w=White}
    y -> Piece {p=Pawn, r=Rook, n=Knight, b=Bishop, q=Queen, k=King}
  */

  const [gameState, setGameState] = useState("White to Move");
  const [turn, setTurn] = useState(1);

  //Define the Board
  const [a1, seta1] = useState("br");
  const [a2, seta2] = useState("bp");
  const [a3, seta3] = useState("");
  const [a4, seta4] = useState("");
  const [a5, seta5] = useState("");
  const [a6, seta6] = useState("");
  const [a7, seta7] = useState("wp");
  const [a8, seta8] = useState("wr");

  const [b1, setb1] = useState("bn");
  const [b2, setb2] = useState("bp");
  const [b3, setb3] = useState("");
  const [b4, setb4] = useState("");
  const [b5, setb5] = useState("");
  const [b6, setb6] = useState("");
  const [b7, setb7] = useState("wp");
  const [b8, setb8] = useState("wn");

  const [c1, setc1] = useState("bb");
  const [c2, setc2] = useState("bp");
  const [c3, setc3] = useState("");
  const [c4, setc4] = useState("");
  const [c5, setc5] = useState("");
  const [c6, setc6] = useState("");
  const [c7, setc7] = useState("wp");
  const [c8, setc8] = useState("wb");

  const [d1, setd1] = useState("bk");
  const [d2, setd2] = useState("bp");
  const [d3, setd3] = useState("");
  const [d4, setd4] = useState("");
  const [d5, setd5] = useState("");
  const [d6, setd6] = useState("");
  const [d7, setd7] = useState("wp");
  const [d8, setd8] = useState("wk");

  const [e1, sete1] = useState("bq");
  const [e2, sete2] = useState("bp");
  const [e3, sete3] = useState("");
  const [e4, sete4] = useState("");
  const [e5, sete5] = useState("");
  const [e6, sete6] = useState("");
  const [e7, sete7] = useState("wp");
  const [e8, sete8] = useState("wq");

  const [f1, setf1] = useState("bb");
  const [f2, setf2] = useState("bp");
  const [f3, setf3] = useState("");
  const [f4, setf4] = useState("");
  const [f5, setf5] = useState("");
  const [f6, setf6] = useState("");
  const [f7, setf7] = useState("wp");
  const [f8, setf8] = useState("wb");

  const [g1, setg1] = useState("bn");
  const [g2, setg2] = useState("bp");
  const [g3, setg3] = useState("");
  const [g4, setg4] = useState("");
  const [g5, setg5] = useState("");
  const [g6, setg6] = useState("");
  const [g7, setg7] = useState("wp");
  const [g8, setg8] = useState("wn");

  const [h1, seth1] = useState("br");
  const [h2, seth2] = useState("bp");
  const [h3, seth3] = useState("");
  const [h4, seth4] = useState("");
  const [h5, seth5] = useState("");
  const [h6, seth6] = useState("");
  const [h7, seth7] = useState("wp");
  const [h8, seth8] = useState("wr");

  const board = {
    a1: a1,
    a2: a2,
    a3: a3,
    a4: a4,
    a5: a5,
    a6: a6,
    a7: a7,
    a8: a8,
    b1: b1,
    b2: b2,
    b3: b3,
    b4: b4,
    b5: b5,
    b6: b6,
    b7: b7,
    b8: b8,
    c1: c1,
    c2: c2,
    c3: c3,
    c4: c4,
    c5: c5,
    c6: c6,
    c7: c7,
    c8: c8,
    d1: d1,
    d2: d2,
    d3: d3,
    d4: d4,
    d5: d5,
    d6: d6,
    d7: d7,
    d8: d8,
    e1: e1,
    e2: e2,
    e3: e3,
    e4: e4,
    e5: e5,
    e6: e6,
    e7: e7,
    e8: e8,
    f1: f1,
    f2: f2,
    f3: f3,
    f4: f4,
    f5: f5,
    f6: f6,
    f7: f7,
    f8: f8,
    g1: g1,
    g2: g2,
    g3: g3,
    g4: g4,
    g5: g5,
    g6: g6,
    g7: g7,
    g8: g8,
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    h6: h6,
    h7: h7,
    h8: h8,
  };

  const [pickDestination, setPickDestination] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState("");

  function startOver() {
    window.location.reload();
  }

  function setSpace(space, piece) {
    // Define a mapping for each space
    console.log(space);
    const spaceMapping = {
      a1: () => seta1(piece),
      a2: () => seta2(piece),
      a3: () => seta3(piece),
      a4: () => seta4(piece),
      a5: () => seta5(piece),
      a6: () => seta6(piece),
      a7: () => seta7(piece),
      a8: () => seta8(piece),
      b1: () => setb1(piece),
      b2: () => setb2(piece),
      b3: () => setb3(piece),
      b4: () => setb4(piece),
      b5: () => setb5(piece),
      b6: () => setb6(piece),
      b7: () => setb7(piece),
      b8: () => setb8(piece),
      c1: () => setc1(piece),
      c2: () => setc2(piece),
      c3: () => setc3(piece),
      c4: () => setc4(piece),
      c5: () => setc5(piece),
      c6: () => setc6(piece),
      c7: () => setc7(piece),
      c8: () => setc8(piece),
      d1: () => setd1(piece),
      d2: () => setd2(piece),
      d3: () => setd3(piece),
      d4: () => setd4(piece),
      d5: () => setd5(piece),
      d6: () => setd6(piece),
      d7: () => setd7(piece),
      d8: () => setd8(piece),
      e1: () => sete1(piece),
      e2: () => sete2(piece),
      e3: () => sete3(piece),
      e4: () => sete4(piece),
      e5: () => sete5(piece),
      e6: () => sete6(piece),
      e7: () => sete7(piece),
      e8: () => sete8(piece),
      f1: () => setf1(piece),
      f2: () => setf2(piece),
      f3: () => setf3(piece),
      f4: () => setf4(piece),
      f5: () => setf5(piece),
      f6: () => setf6(piece),
      f7: () => setf7(piece),
      f8: () => setf8(piece),
      g1: () => setg1(piece),
      g2: () => setg2(piece),
      g3: () => setg3(piece),
      g4: () => setg4(piece),
      g5: () => setg5(piece),
      g6: () => setg6(piece),
      g7: () => setg7(piece),
      g8: () => setg8(piece),
      h1: () => seth1(piece),
      h2: () => seth2(piece),
      h3: () => seth3(piece),
      h4: () => seth4(piece),
      h5: () => seth5(piece),
      h6: () => seth6(piece),
      h7: () => seth7(piece),
      h8: () => seth8(piece),
    };

    if (spaceMapping[space]) {
      spaceMapping[space]();
    } else {
      console.error("Invalid Space " + space);
    }
  }

  //Chess Game Logic
  function getValidDestination(space, turn) {
    const piece = board[selectedSpace];
    const result = [];

    var valid = validMoves(turn);
    if (valid.includes(space)) {
      makeMove(selectedSpace, space);
    }
  }

  function validMoves(team) {
    const letterToNum = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
    };
    const numToLetter = {
      1: "a",
      2: "b",
      3: "c",
      4: "d",
      5: "e",
      6: "f",
      7: "g",
      8: "h",
    };

    var res = [];
    var enemyCode = team === "black" ? "w" : "b";

    if (board[selectedSpace][1] === "p") {
      if (team === "white") {
        if (selectedSpace[1] !== "1") {
          //Straight Forward
          if (
            board[selectedSpace[0] + String(Number(selectedSpace[1]) - 1)] ===
            ""
          ) {
            if (Number(selectedSpace[1]) == 7) {
              res.push(selectedSpace[0] + String(Number(selectedSpace[1]) - 2));
            }
            res.push(selectedSpace[0] + String(Number(selectedSpace[1]) - 1));
          }
          if (selectedSpace[0] === "a") {
            if (
              board[
                nextLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) - 1)
              ][0] === "b"
            ) {
              res.push(
                nextLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) - 1)
              );
            }
          } else if (selectedSpace[0] === "h") {
            if (
              board[
                prevLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) - 1)
              ][0] === "b"
            ) {
              res.push(
                prevLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) - 1)
              );
            }
          } else {
            if (
              board[
                nextLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) - 1)
              ][0] === "b"
            ) {
              res.push(
                nextLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) - 1)
              );
            }
            if (
              board[
                prevLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) - 1)
              ][0] === "b"
            ) {
              res.push(
                prevLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) - 1)
              );
            }
          }
        }
      } else {
        if (selectedSpace[1] !== "8") {
          //Straight Forward
          if (
            board[selectedSpace[0] + String(Number(selectedSpace[1]) + 1)] ===
            ""
          ) {
            if (Number(selectedSpace[1]) == 2) {
              res.push(selectedSpace[0] + String(Number(selectedSpace[1]) + 2));
            }
            res.push(selectedSpace[0] + String(Number(selectedSpace[1]) + 1));
          }
          if (selectedSpace[0] === "a") {
            if (
              board[
                nextLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) + 1)
              ][0] === "b"
            ) {
              res.push(
                nextLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) + 1)
              );
            }
          } else if (selectedSpace[0] === "h") {
            if (
              board[
                prevLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) + 1)
              ][0] === "b"
            ) {
              res.push(
                prevLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) + 1)
              );
            }
          } else {
            if (
              board[
                nextLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) + 1)
              ][0] === "b"
            ) {
              res.push(
                nextLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) + 1)
              );
            }
            if (
              board[
                prevLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) + 1)
              ][0] === "b"
            ) {
              res.push(
                prevLetterInAlphabet(selectedSpace[0]) +
                  String(Number(selectedSpace[1]) + 1)
              );
            }
          }
        }
      }
    } else if (board[selectedSpace][1] === "b") {
      const moveTypes = [
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1],
      ];
      const startingCoord = [
        letterToNum[selectedSpace[0]],
        Number(selectedSpace[1]),
      ];
      moveTypes.forEach(([x, y]) => {
        var temp = startingCoord;
        var loop = true;
        while (loop) {
          temp = [temp[0] + x, temp[1] + y];
          if (temp[0] >= 1 && temp[0] <= 8 && temp[1] >= 1 && temp[1] <= 8) {
            var atTemp = board[numToLetter[temp[0]] + String(temp[1])];
            if (atTemp === "" || atTemp[0] === enemyCode) {
              res.push(numToLetter[temp[0]] + String(temp[1]));
              if (atTemp[0] === enemyCode) {
                loop = false;
              }
            } else {
              loop = false;
            }
          } else {
            loop = false;
          }
        }
      });
    } else if (board[selectedSpace][1] === "r") {
      const moveTypes = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
      ];
      const startingCoord = [
        letterToNum[selectedSpace[0]],
        Number(selectedSpace[1]),
      ];

      moveTypes.forEach(([x, y]) => {
        var temp = startingCoord;
        var loop = true;
        while (loop) {
          temp = [temp[0] + x, temp[1] + y];
          console.log(numToLetter[temp[0]] + temp[1]);
          if (temp[0] >= 1 && temp[0] <= 8 && temp[1] >= 1 && temp[1] <= 8) {
            var atTemp = board[numToLetter[temp[0]] + String(temp[1])];
            if (atTemp === "" || atTemp[0] === enemyCode) {
              res.push(numToLetter[temp[0]] + String(temp[1]));
              if (atTemp[0] === enemyCode) {
                loop = false;
              }
            } else {
              loop = false;
            }
          } else {
            loop = false;
          }
        }
      });
    } else if (board[selectedSpace][1] === "q") {
      const moveTypes = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1],
      ];
      const startingCoord = [
        letterToNum[selectedSpace[0]],
        Number(selectedSpace[1]),
      ];

      moveTypes.forEach(([x, y]) => {
        var temp = startingCoord;
        var loop = true;
        while (loop) {
          temp = [temp[0] + x, temp[1] + y];
          console.log(numToLetter[temp[0]] + temp[1]);
          if (temp[0] >= 1 && temp[0] <= 8 && temp[1] >= 1 && temp[1] <= 8) {
            var atTemp = board[numToLetter[temp[0]] + String(temp[1])];
            if (atTemp === "" || atTemp[0] === "b") {
              res.push(numToLetter[temp[0]] + String(temp[1]));
              if (atTemp[0] === enemyCode) {
                loop = false;
              }
            } else {
              loop = false;
            }
          } else {
            loop = false;
          }
        }
      });
    } else if (board[selectedSpace][1] === "n") {
      const moveTypes = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
      ];
      const startingCoord = [
        letterToNum[selectedSpace[0]],
        Number(selectedSpace[1]),
      ];

      moveTypes.forEach(([x, y]) => {
        var temp = [startingCoord[0] + x, startingCoord[1] + y];
        console.log(numToLetter[temp[0]] + temp[1]);
        if (temp[0] >= 1 && temp[0] <= 8 && temp[1] >= 1 && temp[1] <= 8) {
          var atTemp = board[numToLetter[temp[0]] + String(temp[1])];
          if (atTemp === "" || atTemp[0] === enemyCode) {
            res.push(numToLetter[temp[0]] + String(temp[1]));
          }
        }
      });
    } else if (board[selectedSpace][1] === "k") {
      const moveTypes = [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      const startingCoord = [
        letterToNum[selectedSpace[0]],
        Number(selectedSpace[1]),
      ];

      moveTypes.forEach(([x, y]) => {
        var temp = [startingCoord[0] + x, startingCoord[1] + y];
        console.log(numToLetter[temp[0]] + temp[1]);
        if (temp[0] >= 1 && temp[0] <= 8 && temp[1] >= 1 && temp[1] <= 8) {
          var atTemp = board[numToLetter[temp[0]] + String(temp[1])];
          if (atTemp === "" || atTemp[0] === enemyCode) {
            res.push(numToLetter[temp[0]] + String(temp[1]));
          }
        }
      });
    }

    return res;
  }

  function makeMove(pieceSpace, destinationSpace) {
    var next = board[pieceSpace][0] === "b" ? "White" : "Black";
    setSpace(destinationSpace, board[pieceSpace]);
    setSpace(pieceSpace, "");
    setPickDestination(false);

    setGameState(`${next} to Move`);
    setTurn(turn + 1);
  }

  function nextLetterInAlphabet(letter) {
    if (letter == "g") {
      return "";
    } else {
      return String.fromCharCode(letter.charCodeAt(0) + 1);
    }
  }

  function prevLetterInAlphabet(letter) {
    if (letter == "a") {
      return "";
    } else {
      return String.fromCharCode(letter.charCodeAt(0) - 1);
    }
  }

  function clicked(space) {
    var blackTurn = turn % 2 == 0;
    if (!pickDestination) {
      //Haven't Selected Moving Piece Yet

      if (
        (blackTurn && board[space][0] == "b") ||
        (!blackTurn && board[space][0] == "w")
      ) {
        setPickDestination(true);
        setSelectedSpace(space);
        setGameState(`Moving ${space}, Click Destination`);
      }
    } else {
      if (space == selectedSpace) {
        setSelectedSpace("");
        setPickDestination(false);
        if(blackTurn) {
          setGameState(`Black to Move`);
        } else {
          setGameState(`White to Move`)
        }
      } else {
        if (blackTurn) {
          getValidDestination(space, "black");
        } else {
          getValidDestination(space, "white");
        }
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p id="gameState">{gameState}</p>
        {turn == 1 ? (
          <div className="startGame"></div>
        ) : (
          <button className="startGame" onClick={startOver}>
            Restart Game
          </button>
        )}
        <div className="boardContainer">
          <table className="board">
            <tbody>
              <tr id="Index">
                <td></td>
                <td>H</td>
                <td>G</td>
                <td>F</td>
                <td>E</td>
                <td>D</td>
                <td>C</td>
                <td>B</td>
                <td>A</td>
              </tr>
              <tr id="row1">
                <td>1</td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("h1")}>
                    <Space color="white" piece={h1} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("g1")}>
                    <Space color="black" piece={g1} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("f1")}>
                    <Space color="white" piece={f1} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("e1")}>
                    <Space color="black" piece={e1} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("d1")}>
                    <Space color="white" piece={d1} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("c1")}>
                    <Space color="black" piece={c1} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("b1")}>
                    <Space color="white" piece={b1} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("a1")}>
                    <Space color="black" piece={a1} />
                  </button>
                </td>
              </tr>
              <tr id="row2">
                <td>2</td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("h2")}>
                    <Space color="black" piece={h2} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("g2")}>
                    <Space color="white" piece={g2} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("f2")}>
                    <Space color="black" piece={f2} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("e2")}>
                    <Space color="white" piece={e2} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("d2")}>
                    <Space color="black" piece={d2} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("c2")}>
                    <Space color="white" piece={c2} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("b2")}>
                    <Space color="black" piece={b2} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("a2")}>
                    <Space color="white" piece={a2} />
                  </button>
                </td>
              </tr>
              <tr id="row3">
                <td>3</td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("h3")}>
                    <Space color="white" piece={h3} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("g3")}>
                    <Space color="black" piece={g3} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("f3")}>
                    <Space color="white" piece={f3} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("e3")}>
                    <Space color="black" piece={e3} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("d3")}>
                    <Space color="white" piece={d3} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("c3")}>
                    <Space color="black" piece={c3} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("b3")}>
                    <Space color="white" piece={b3} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("a3")}>
                    <Space color="black" piece={a3} />
                  </button>
                </td>
              </tr>
              <tr id="row4">
                <td>4</td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("h4")}>
                    <Space color="black" piece={h4} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("g4")}>
                    <Space color="white" piece={g4} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("f4")}>
                    <Space color="black" piece={f4} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("e4")}>
                    <Space color="white" piece={e4} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("d4")}>
                    <Space color="black" piece={d4} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("c4")}>
                    <Space color="white" piece={c4} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("b4")}>
                    <Space color="black" piece={b4} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("a4")}>
                    <Space color="white" piece={a4} />
                  </button>
                </td>
              </tr>
              <tr id="row5">
                <td>5</td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("h5")}>
                    <Space color="white" piece={h5} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("g5")}>
                    <Space color="black" piece={g5} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("f5")}>
                    <Space color="white" piece={f5} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("e5")}>
                    <Space color="black" piece={e5} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("d5")}>
                    <Space color="white" piece={d5} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("c5")}>
                    <Space color="black" piece={c5} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("b5")}>
                    <Space color="white" piece={b5} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("a5")}>
                    <Space color="black" piece={a5} />
                  </button>
                </td>
              </tr>
              <tr id="row6">
                <td>6</td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("h6")}>
                    <Space color="black" piece={h6} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("g6")}>
                    <Space color="white" piece={g6} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("f6")}>
                    <Space color="black" piece={f6} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("e6")}>
                    <Space color="white" piece={e6} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("d6")}>
                    <Space color="black" piece={d6} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("c6")}>
                    <Space color="white" piece={c6} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("b6")}>
                    <Space color="black" piece={b6} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("a6")}>
                    <Space color="white" piece={a6} />
                  </button>
                </td>
              </tr>
              <tr id="row7">
                <td>7</td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("h7")}>
                    <Space color="white" piece={h7} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("g7")}>
                    <Space color="black" piece={g7} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("f7")}>
                    <Space color="white" piece={f7} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("e7")}>
                    <Space color="black" piece={e7} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("d7")}>
                    <Space color="white" piece={d7} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("c7")}>
                    <Space color="black" piece={c7} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("b7")}>
                    <Space color="white" piece={b7} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("a7")}>
                    <Space color="black" piece={a7} />
                  </button>
                </td>
              </tr>
              <tr id="row8">
                <td>8</td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("h8")}>
                    <Space color="black" piece={h8} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("g8")}>
                    <Space color="white" piece={g8} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("f8")}>
                    <Space color="black" piece={f8} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("e8")}>
                    <Space color="white" piece={e8} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("d8")}>
                    <Space color="black" piece={d8} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("c8")}>
                    <Space color="white" piece={c8} />
                  </button>
                </td>
                <td>
                  <button className="blackSpace" onClick={() => clicked("b8")}>
                    <Space color="black" piece={b8} />
                  </button>
                </td>
                <td>
                  <button className="whiteSpace" onClick={() => clicked("a8")}>
                    <Space color="white" piece={a8} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
      </header>
    </div>
  );
}

export default Chess;
