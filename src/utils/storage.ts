export const saveToLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = <T>(key: string): T | null => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? (JSON.parse(storedValue) as T) : null;
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
