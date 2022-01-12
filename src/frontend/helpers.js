module.exports = {
  phoneSlices(phone) {
    if (!phone) return ['', ''];
    try {
      return phone
        .replace(/\W/gi, '')
        .replace(/([0-9]{2})([0-9]+)/, '$1 $2')
        .split(' ');
    } catch (err) {
      return ['', ''];
    }
  },
  joinPhone(code, number) {
    code = code.replace(/\W/gi, '');
    number = number.replace(/\W/gi, '').replace(/(^[0-9]{5})([0-9]+)/, '$1-$2');
    return `(${code}) ${number}`;
  },
};
