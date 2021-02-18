module.exports = function check(str, bracketsConfig) {
  let a = [];
  let i = 0;
  let x = str.split('')
  bracketsConfig.forEach(element => {

    a[i] = element.join('');
    i++;
  });

  x.forEach(element => {
    a.forEach(element1 => {
      str = str.replace(element1, '')
    });

  });



  if (str == '') {
    return true;

  } else {
    return false;
  }
}

