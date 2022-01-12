const helpers = {
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
    if (!code || !number) return '';
    code = code.replace(/\W/gi, '');
    number = number.replace(/\W/gi, '').replace(/(^[0-9]{5})([0-9]+)/, '$1-$2');
    return `(${code}) ${number}`;
  },
  formatContactDataFromAPI(api_data) {
    const {
      id,
      first_name,
      last_name,
      main_phone: { code: main_code, phone: main_number },
      other_phone: { code: other_code, phone: other_number },
      address: { state, city, street, number, district, CEP },
      birth_date,
    } = api_data;
    return {
      id,
      first_name,
      last_name,
      main_phone: helpers.joinPhone(main_code, main_number),
      other_phone: helpers.joinPhone(other_code, other_number),
      state,
      city,
      street,
      number,
      district,
      CEP,
      birth_date,
    };
  },
};

module.exports = helpers;
