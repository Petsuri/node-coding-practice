

exports.structurize = (name) => {
  
  const initialNames = name ?? "";
  const listOfNames = initialNames.split(" ")
    .filter(removeEmptyEntries)
    .map(firstLetterCapitalized); 
  return {
    first: getFirstName(listOfNames),
    middle: getMiddleNames(listOfNames),
    last: getLastName(listOfNames),
  };

}

function removeEmptyEntries(name) {
  return name && name.length !== 0;
}

function firstLetterCapitalized(name) {
  
  if (name.length === 0) {
    return name;
  }

  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); 
}

function getFirstName(names) {
  if (containsFirstName(names)) {
    const firstNameIndex = 0;
    return names[firstNameIndex];
  }

  return null;
}

function getMiddleNames(names) {
  if (containsMiddleNames(names)) {
    return names.slice(1, lastNameIndex(names))
  }

  return [];
}

function getLastName(names) {
  if (containsLastName(names)) {
    return names[lastNameIndex(names)];
  }

  return null;
}

function containsFirstName(names) {
  return 0 < names.length;
}

function containsMiddleNames(names) {
  const firstAndLastNames = 2;
  return firstAndLastNames < names.length;
}

function containsLastName(names) {
  const firstName = 1;
  return firstName < names.length;
}

function lastNameIndex(names) {
  return names.length - 1;;
}