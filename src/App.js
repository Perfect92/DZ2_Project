import React from "react";

class Sq extends React.Component {
  render(){
    return(
      <button className="sq">{this.props.value}</button>
    )
  }
}

class Bd extends React.Component{
  renderSq (i){
    return <Sq value={i}/>
  }
  render(){
    const status = "Игрок"

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSq(0)}
          {this.renderSq(1)}
          {this.renderSq(2)}
          {this.renderSq(3)}
          {this.renderSq(4)}
          {this.renderSq(5)}
        </div>
        <div className="board-row">
          {this.renderSq(6)}
          {this.renderSq(7)}
          {this.renderSq(8)}
          {this.renderSq(9)}
          {this.renderSq(10)}
          {this.renderSq(11)}
 
        </div>
        <div className="board-row">
          {this.renderSq(12)}
          {this.renderSq(13)}
          {this.renderSq(14)}
          {this.renderSq(15)}
          {this.renderSq(16)}
          {this.renderSq(17)}

        </div>
        <div className="board-row">
          {this.renderSq(18)}
          {this.renderSq(19)}
          {this.renderSq(20)}
          {this.renderSq(21)}
          {this.renderSq(22)}
          {this.renderSq(23)}

        </div>
        <div className="board-row">
          {this.renderSq(24)}
          {this.renderSq(25)}
          {this.renderSq(26)}
          {this.renderSq(27)}
          {this.renderSq(28)}
          {this.renderSq(29)}
        </div>
        <div className="board-row">
          {this.renderSq(30)}
          {this.renderSq(31)}
          {this.renderSq(32)}
          {this.renderSq(33)}
          {this.renderSq(34)}
          {this.renderSq(35)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component{
  render(){
    return (
      <div className="game">
        <div className="game-board">
          <Bd />
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}

export default Game;
