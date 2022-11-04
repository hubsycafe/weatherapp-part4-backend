function checkBody(body) {
  if (
    body.email &&
    body.password &&
    body.email !== "" &&
    body.password !== ""
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = { checkBody };
