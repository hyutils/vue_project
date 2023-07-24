export const SET_STROAGE = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const GET_STROAGE = (key: string) => {
  return localStorage.getItem(key);
};

export const REMOVE_STROAGE = (key: string) => {
  localStorage.removeItem(key);
};
