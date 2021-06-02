export const getSetExpression = (display, setDisplay) => expression => {
  expression != null ? setDisplay(display.concat(expression)) : setDisplay('');
};

const operation = (op, numberOne, numberTwo) => {
  let result;
  switch (op) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    case '/':
      if (numberTwo !== 0) {
        result = numberOne / numberTwo;
      } else {
        console.warn('Indeterminado');
        return '';
      }
      break;
    case '%':
      result = numberOne % numberTwo;
      break;
  }
  return result;
};

export const getSolveOperation = (display, setDisplay) => () => {
  let result = '';
  let exp = RegExp(/^(-?\d*(,\d*)?)([+|\-|*|/|%]{1})(-?\d*(,\d*)?)$/);
  if (display.match(exp) != null) {
    result = display.replace(/,/g, '.');
    let consultExpression = result.split(/([+|*|/|%]{1})/);
    consultExpression.length === 3
      ? setDisplay(
          operation(
            consultExpression[1],
            parseFloat(consultExpression[0]),
            parseFloat(consultExpression[2]),
          )
            .toLocaleString('es-ES')
            .replace('.', ','),
        )
      : 'Hace todas las operaciones menos la resta';
  } else {
    console.warn('Error:No es una operación valida.');
    setDisplay('');
  }
};

export const getDeleteLastValue = (display, setDisplay) => () => {
  setDisplay(display.slice(0, -1));
};

export const retrieveButtons = (display, setDisplay) => {
  const setExpression = getSetExpression(display, setDisplay);
  const deleteLastValue = getDeleteLastValue(display, setDisplay);
  const solveOperation = getSolveOperation(display, setDisplay);

  return [
    {
      label: 'C',
      action: () => setExpression(null),
      style: 'del',
    },
    {
      label: '<',
      action: () => deleteLastValue(),
      style: 'del',
    },
    {
      label: '%',
      action: () => setExpression('%'),
      style: 'operation',
    },
    {
      label: '/',
      action: () => setExpression('/'),
      style: 'operation',
    },
    {
      label: '7',
      action: () => setExpression('7'),
    },
    {
      label: '8',
      action: () => setExpression('8'),
    },
    {
      label: '9',
      action: () => setExpression('9'),
    },
    {
      label: '*',
      action: () => setExpression('*'),
      style: 'operation',
    },
    {
      label: '4',
      action: () => setExpression('4'),
    },
    {
      label: '5',
      action: () => setExpression('5'),
    },
    {
      label: '6',
      action: () => setExpression('6'),
    },
    {
      label: '-',
      action: () => setExpression('-'),
      style: 'operation',
    },
    {
      label: '1',
      action: () => setExpression('1'),
    },
    {
      label: '2',
      action: () => setExpression('2'),
    },
    {
      label: '3',
      action: () => setExpression('3'),
    },
    {
      label: '+',
      action: () => setExpression('+'),
      style: 'operation',
    },
    {
      label: '0',
      action: () => setExpression('0'),
    },
    {
      label: ',',
      action: () => setExpression(','),
    },
    {
      label: '=',
      action: () => solveOperation(),
      style: 'operation',
    },
  ];
};
