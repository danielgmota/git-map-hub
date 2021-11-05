export const formatDate = (param: string) => {
  let date = new Date(param);
  return date.toLocaleDateString("pt-BR");
};
