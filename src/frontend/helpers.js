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
};
