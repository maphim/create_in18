// Import stylesheets
import './style.css';

// Write Javascript code!

function convertVietnameseCharacters(obj) {
  let str = obj;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/E|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/Đ/g, 'D');
  str = str.replace(/\W+/g, '_');
  return str;
}

var list = {};

document.querySelector('button.push').addEventListener('click', function() {
  try {
    const parent_key = document.querySelector('[placeholder="parent_key"]')
      .value;
    const text = document.querySelector('[placeholder="text"]').value;

    let key = convertVietnameseCharacters(text).replace(/\s+/gi, '_');

    if (!list[parent_key]) {
      list[parent_key] = {};
    }

    list[parent_key][key] = text;

    console.log(list);

    document.querySelector('.result').value = JSON.stringify(list, null, '  ');
  } catch (e) {
    console.error(e.message);
  }
});

document.querySelector('button.reload').addEventListener('click', function() {
  let json = document.querySelector('textarea').value;
  try {
    list = JSON.parse(json);
    console.log(list);
  } catch (e) {
    console.error(e.message);
  }
});
