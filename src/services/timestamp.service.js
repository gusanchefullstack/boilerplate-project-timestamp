export const timestampConverterService = (dateString) => {
  // Si dateString es undefined o null, retornar error
  if (!dateString) {
    return { error: "Invalid Date" };
  }

  let date;

  // Verificar si es un número (Unix timestamp)
  if (!isNaN(dateString) && !isNaN(parseFloat(dateString))) {
    date = new Date(parseInt(dateString));
  } else {
    // Intentar parsear como string de fecha
    date = new Date(dateString);
  }

  if (isNaN(date.getTime())) {
    return { error: "Invalid Date" };
  }

  return {
    unix: date.getTime(),
    utc: date.toUTCString(),
  };
};

export const timestampGeneratorService = () => {
  const date = new Date();
  return {
    unix: date.getTime(),
    utc: date.toUTCString(),
  };
};
