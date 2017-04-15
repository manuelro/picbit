function captilizeFirstLetter (string) {
  return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
}

function lowercaseFirstLetter (string) {
  return string.toLowerCase().charAt(0) + string.slice(1);
}

Modules.client = {
  captilizeFirstLetter,
  lowercaseFirstLetter
};
