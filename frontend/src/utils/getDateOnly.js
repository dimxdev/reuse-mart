function getDateOnly(isoString) {
  return isoString.split("T")[0];
}

export default getDateOnly
