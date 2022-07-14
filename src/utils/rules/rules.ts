export const composeRules = (rules: Array<Object | Function>) => {
  let objectRules = {};
  rules.forEach((rule) => {
    objectRules = { ...objectRules, ...rule };
  });
  return objectRules;
};

export const required = {
  required: {
    value: true,
    message: 'Campo obrigatório',
  },
};

export const minLength = (min: number) => ({
  minLength: {
    value: min,
    message: `Deve ter no mínimo ${min} caracteres`,
  },
});
