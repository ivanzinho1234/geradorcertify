function salvarDados() {
      localStorage.setItem("nome", document.getElementById("nome").value);
      localStorage.setItem("curso", document.getElementById("curso").value);
      localStorage.setItem("carga", document.getElementById("carga").value);
      localStorage.setItem("inicio", document.getElementById("dataInicio").value);
      localStorage.setItem("fim", document.getElementById("dataFim").value);
      window.location.href = "certificado.html";
    }
     