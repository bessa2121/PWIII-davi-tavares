/**
 * feat(game): Implementação de um jogo da velha (Tic-Tac-Toe) com histórico de jogadas
 * 
 * Tecnologias:
 * - React
 * - TypeScript
 * 
 * Funcionalidades:
 * - Renderização do tabuleiro 3x3
 * - Alternância de jogadores (X / O)
 * - Detecção automática de vencedor
 * - Histórico de jogadas (time travel)
 * - Navegação entre jogadas anteriores
 *
 *
 *
 * - Props = Propriedades
 * - @Param = Parametros
 * - @Component = Componente
 * - Callback = Retorno/função que é chamada de volta (call back) por outra função.
 * - Imutável = não pode ser modificado diretamente
 */

import { useState } from "react";

/**
 * Props do componente Square
 */
type SquareProps = {
  /** Valor exibido no quadrado (X, O ou null) */
  value: string | null;

  /** Função chamada ao clicar no quadrado */
  onSquareClick: () => void;
};

/**
 * Componente responsável por renderizar um único quadrado do tabuleiro
 *
 * @component
 */
function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

/**
 * Props do componente Board
 */
type BoardProps = {
  /** Define se o próximo jogador é X */
  xIsNext: boolean;

  /** Estado atual do tabuleiro */
  squares: (string | null)[];

  /** Callback executado quando um jogador faz uma jogada */
  onPlay: (nextSquares: (string | null)[]) => void;
};

/**
 * Componente responsável pelo tabuleiro do jogo
 *
 * Responsabilidades:
 * - Gerenciar cliques nas casas
 * - Renderizar os 9 quadrados
 * - Mostrar status da partida
 */
function Board({ xIsNext, squares, onPlay }: BoardProps) {

  /**
   * Lida com o clique em um quadrado do tabuleiro
   *
   * @param i índice do quadrado clicado
   */
  function handleClick(i: number) {

    /**
     * Se já houver vencedor ou o quadrado já estiver preenchido o clique é ignorado.
     */
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    /**
     * Cria uma cópia do tabuleiro atual
     * (imutabilidade do estado)
     */
    const nextSquares = squares.slice();

    /**
     * Define o símbolo do jogador atual
     */
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    /**
     * Envia o novo estado do tabuleiro
     * para o componente pai
     */
    onPlay(nextSquares);
  }

  /** Verifica se existe um vencedor */
  const winner = calculateWinner(squares);

  let status: string;

  /** Define o texto de status exibido */
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      {/* Status da partida */}
      <div className="status">{status}</div>

      {/* Linha 1 */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      {/* Linha 2 */}
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      {/* Linha 3 */}
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

/**
 * Componente principal da aplicação
 *
 * Responsável por:
 * - Gerenciar estado global do jogo
 * - Manter histórico de jogadas
 * - Permitir navegação entre jogadas
 */
export default function App() {

  /**
   * Estado que armazena o histórico de jogadas
   *
   * Cada item do array representa um estado do tabuleiro.
   */
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);

  /**
   * Guarda qual jogada do histórico está sendo exibida
   */
  const [currentMove, setCurrentMove] = useState<number>(0);

  /**
   * Determina qual jogador joga agora
   *
   * Jogadas pares -> X
   * Jogadas ímpares -> O
   */
  const xIsNext = currentMove % 2 === 0;

  /**
   * Estado atual do tabuleiro
   */
  const currentSquares = history[currentMove];

  /**
   * Executado quando uma jogada é feita
   *
   * @param nextSquares novo estado do tabuleiro
   */
  function handlePlay(nextSquares: (string | null)[]) {

    /**
     * Remove histórico futuro caso o jogador
     * tenha voltado no tempo
     */
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory(nextHistory);

    /**
     * Atualiza para a última jogada
     */
    setCurrentMove(nextHistory.length - 1);
  }

  /**
   * Permite voltar para uma jogada anterior
   *
   * @param nextMove índice da jogada no histórico
   */
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  /**
   * Gera lista de botões para navegar no histórico
   */
  const moves = history.map((squares, move) => {
    let description: string;

    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">

      {/* Tabuleiro */}
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>

      {/* Histórico de jogadas */}
      <div className="game-info">
        <ol>{moves}</ol>
      </div>

    </div>
  );
}

/**
 * Verifica se existe um vencedor no jogo
 *
 * @param squares estado atual do tabuleiro
 * @returns "X", "O" ou null
 */
function calculateWinner(squares: (string | null)[]): string | null {

  /**
   * Todas as combinações possíveis de vitória
   */
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  /**
   * Percorre cada combinação
   */
  for (let i = 0; i < lines.length; i++) {

    const [a, b, c] = lines[i];

    /**
     * Verifica se os três quadrados são iguais
     */
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}
