function ins(n){
    document.struttura.textarea.value = document.struttura.textarea.value+n
  }
  function somma() {
    let c = document.struttura.textarea.value;
    if (c){
      document.struttura.textarea.value = eval(c);
    }
  }

  function reset() {
    document.struttura.textarea.value = '';
  }

  function cancella() {
    let a = document.struttura.textarea.value;
    document.struttura.textarea.value = a.substring(0, a.length-1);
  }