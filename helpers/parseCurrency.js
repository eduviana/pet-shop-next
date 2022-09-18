/* eslint-disable prettier/prettier */
export const parseCurrency = (value)=> {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
};
