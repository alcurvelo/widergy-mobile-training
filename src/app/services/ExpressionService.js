import api from '../config/api';

export default {
  getExpressions: () => api.get('/calc/expressions'),
  setExpressions: expressions => api.post('/calc/expressions', expressions),
  editExpressionById: ({ id, expression }) =>
    api.put(`/calc/expressions/${id}`, { expression: expression }),
  delExpression: objArrayDel =>
    api.delete(
      '/calc/expressions',
      {},
      {
        data: objArrayDel,
      },
    ),
  deleteAll: history => {
    const arrayExpressionsId = history.map(expression => expression.id);
    return api.delete(
      '/calc/expressions',
      {},
      {
        data: { expressions: arrayExpressionsId },
      },
    );
  },
};
