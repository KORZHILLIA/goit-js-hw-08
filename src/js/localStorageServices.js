function save(key, value) {
  try {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  } catch (error) {
    alert(`Error occured: ${error.message}`);
  }
}

function load(key) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? undefined : JSON.parse(value);
  } catch (error) {
    alert(`Error occured: ${error.message}`);
  }
}

export { save, load };
