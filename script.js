let isRoleEncrypt = true;
let isBase64Encryption = false;

function encrypt(value) {
  value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const encrypted_value = value
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  return encrypted_value;
}

function decrypt(value) {
  value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const decrypted_value = value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  return decrypted_value;
}

function handleEncrypt() {
  let value = document.getElementById('input_textarea').value.toLowerCase();

  if (value.length > 0) {
    if (isRoleEncrypt) {
      value = encrypt(value);
    } else {
      value = decrypt(value);
    }
  } else {
    value = "vazio infinito";
  }

  document.getElementById('output_textarea').value = value;
}

function handleRoleChange() {
  isRoleEncrypt = !isRoleEncrypt;

  if (isRoleEncrypt) {
    document.getElementById('button_criptografar').textContent = 'Criptografar';
  } else {
    document.getElementById('button_criptografar').textContent = 'Descriptografar';
  }

  let inputText = document.getElementById('input_textarea').value;
  let outputText = document.getElementById('output_textarea').value;
  document.getElementById('input_textarea').value = outputText;
  document.getElementById('output_textarea').value = inputText;
}

function handleClearTextArea() {
  document.getElementById('input_textarea').value = "";
  document.getElementById('output_textarea').value = "";
}

function handleCopyText() {
  document.getElementById('output_textarea').select()
  document.execCommand('copy');
}

function getHSL(hue, saturation, lightness) {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function handleThemeColorChange() {
  const hue = Math.floor(Math.random() * 360);

  const random_color = getHSL(hue, 100, 70);
  const random_color11 = getHSL(hue, 60, 60);

  const random_color2 = getHSL(hue, 100, 35);
  const random_color3 = getHSL(hue, 35, 20);
  const random_color4 = getHSL(hue, 20, 10);
  const random_color5 = getHSL(hue, 40, 15);

  document.querySelector(':root').style.setProperty('--primary-color', random_color);
  document.querySelector(':root').style.setProperty('--secondary-color', random_color2);
  document.querySelector(':root').style.setProperty('--background-color', random_color3);
  document.querySelector(':root').style.setProperty('--body-bg-color', random_color4);
  document.querySelector(':root').style.setProperty('--container-border-color', random_color5);
  document.querySelector(':root').style.setProperty('--hover-color', random_color11);
}

function handleShowInfo() {
  document.getElementById('info').classList.toggle('extended');
}

function changeToBase64Encryption() {
  isBase64Encryption = !isBase64Encryption;

  if (isBase64Encryption) {
    document.getElementById('button_encryptionMethod').textContent = "Mudar para criptografia padrão";
  } else {
    document.getElementById('button_encryptionMethod').textContent = "Mudar para criptografia com Base64";
  }
}

handleThemeColorChange();
