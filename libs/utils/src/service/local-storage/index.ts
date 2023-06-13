// ============================
//  get data from local storage
// ============================

export const getFromLocalStorage = (key_name: string) => {
  const storedData = localStorage.getItem(key_name);
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    return parsedData;
  }
  return null; // Add a default return value when storedData is falsy
};

// ============================
//  set data to local storage
// ============================

export const storeToLocalStorage = (key: string, data: object[] | [] | number | string) => {
  const stringValue = JSON.stringify(data);
  localStorage.setItem(key, stringValue);
};

// ============================
//  remove data from local storage
// ============================

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
