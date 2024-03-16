function decomposeHangul(char) {
  const code = char.charCodeAt(0) - 0xAC00;
  const 종성 = code % 28; 
  const 중성 = ((code - 종성) / 28) % 21; 
  const 초성 = parseInt(((code - 종성) / 28) / 19); 

  const 초성Char = String.fromCharCode(초성 + 0x1100);
  const 중성Char = String.fromCharCode(중성 + 0x1161); 
  const 종성Char = 종성 ? String.fromCharCode(종성 + 0x11A7) : ''; 

  return [초성Char, 중성Char, 종성Char];
}

const hangul = '가';
const [초성, 중성, 종성] = decomposeHangul(hangul);
console.log(초성, 중성, 종성);