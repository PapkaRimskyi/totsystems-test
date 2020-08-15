export function setItemToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getItemFromLocalStorage(key) {
  return localStorage.getItem(key);
}

export function removeItemFromLocalStorage(key) {
  localStorage.removeItem(key);
}
