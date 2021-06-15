import api from '../config/api';

export default {
  getExpressions: async () => {
    return await api.get('/calc/expressions');
  },
  setExpressions: async expressions => {
    return await api.post('/calc/expressions', expressions);
  },
  editExpressionForId: async ({ id, expression }) => {
    return await api.put(`/calc/expressions/${id}`, { expression: expression });
  },
  delExpression: async objArrayDel => {
    return await api.delete(
      '/calc/expressions',
      {},
      {
        data: objArrayDel,
      },
    );
  },
  deleteAll: async history => {
    const arrayExpressionsId = history.map(expression => expression.id);
    return await api.delete(
      '/calc/expressions',
      {},
      {
        data: { expressions: arrayExpressionsId },
      },
    );
  },
};
