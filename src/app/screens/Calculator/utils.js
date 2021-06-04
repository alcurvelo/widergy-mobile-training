import styles from './components//Button/styles';

export const getSetExpression = (display, setDisplay) => expression => {
  expression != null ? setDisplay(display.concat(expression)) : setDisplay('');
};

const operation = (numberOne, numberTwo) => {
  return {
    '+': numberOne + numberTwo,
    '-': numberOne - numberTwo,
    '*': numberOne * numberTwo,
    '/': numberOne / numberTwo,
    '%': numberOne % numberTwo,
  };
};

export const getSolveOperation = (display, setDisplay) => () => {
  let result = '';
  let exp = RegExp(/^(-?\d*(,\d*)?)([+|\-|*|/|%]{1})(-?\d*(,\d*)?)$/);
  if (display.replace(/ /g, '').match(exp) != null) {
    result = display.replace(/,/g, '.');
    let consultExpression = result.split(/ /);
    if (consultExpression.length === 3) {
      if (consultExpression[2] === '0' && consultExpression[1] === '/') {
        console.warn('Indeterminado');
        setDisplay('');
      } else {
        setDisplay(
          operation(
            parseFloat(consultExpression[0]),
            parseFloat(consultExpression[2]),
          )
            [consultExpression[1]].toLocaleString('es-ES')
            .replace('.', ','),
        );
      }
    }
  } else {
    let buscaOperador = display.split(/[\+\*\/\%]{1}/);
    if (buscaOperador.length < 2 && display.length !== 0) {
      setDisplay(display);
    } else {
      console.warn('Error:No es una operación valida.');
      setDisplay('');
    }
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
      style: styles.del,
    },
    {
      label: '<',
      action: () => deleteLastValue(),
      style: styles.del,
    },
    {
      label: '%',
      action: () => setExpression(' % '),
      style: styles.operation,
    },
    {
      label: '/',
      action: () => setExpression(' / '),
      style: styles.operation,
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
      action: () => setExpression(' * '),
      style: styles.operation,
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
      action: () => {
        let buscaOperador = display.split(/[\+\*\/\%]{1}/);
        (display.split(/-/).length === 2 && buscaOperador.length < 2) ||
        (display.length > 0 &&
          display.indexOf('-') === -1 &&
          buscaOperador.length < 2)
          ? setExpression(' - ')
          : setExpression('-');
      },
      style: styles.operation,
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
      action: () => setExpression(' + '),
      style: styles.operation,
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
      style: styles.operation,
    },
  ];
};
