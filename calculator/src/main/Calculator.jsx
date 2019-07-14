import React from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  value: [0, 0],
  current: 0
};

class Calculator extends React.Component {

  clearMemory() {
    console.log('Limpar');
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(n) {
    console.log(n);
  }

  render() {
    return (
      <div className="calculator">
        <Display value={0}/>
        <Button label="AC" click={() => this.clearMemory()} triple/>
        <Button label="/" click={(ope) => this.setOperation(ope)} operation/>
        <Button label="7" click={(e) => this.addDigit(e)}/>
        <Button label="8" click={(e) => this.addDigit(e)}/>
        <Button label="9" click={(e) => this.addDigit(e)}/>
        <Button label="*" click={(ope) => this.setOperation(ope)} operation/>
        <Button label="4" click={(e) => this.addDigit(e)}/>
        <Button label="5" click={(e) => this.addDigit(e)}/>
        <Button label="6" click={(e) => this.addDigit(e)}/>
        <Button label="-" click={(ope) => this.setOperation(ope)} operation/>
        <Button label="1" click={(e) => this.addDigit(e)}/>
        <Button label="2" click={(e) => this.addDigit(e)}/>
        <Button label="3" click={(e) => this.addDigit(e)}/>
        <Button label="+" click={(ope) => this.setOperation(ope)} operation/>
        <Button label="0" click={(e) => this.addDigit(e)} double/>
        <Button label="." click={(ope) => this.setOperation(ope)}/>
        <Button label="=" click={(ope) => this.setOperation(ope)} operation/>
      </div>
    );
  }
}

export default Calculator;
