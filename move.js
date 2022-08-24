//Enterを押したら特定の文字を削除

document.addEventListener('DOMContentLoaded', function() {
 
  document.getElementById("enter").onclick = function() {
    const word = document.getElementById("word").value;
    const text = document.getElementById("text").value;
    const output = text.replaceAll(word,"");
    document.getElementById("output").innerHTML = output;

  };

//同じコードを繰り返しているのでコンパクトにしたい
  window.document.onkeydown = function(e){
    if (e.key === 'Enter') {
      if (e.shiftKey){
        ;
      }else {
      const word = document.getElementById("word").value;
      const text = document.getElementById("text").value;
      const output = text.replaceAll(word,"");
      document.getElementById("output").innerHTML = output;
      };
    };
  };


 
});

