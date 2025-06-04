document.getElementById("nome").textContent = localStorage.getItem("nome") || "Seu Nome";
    document.getElementById("curso").textContent = localStorage.getItem("curso") || "Curso";
    document.getElementById("carga").textContent = localStorage.getItem("carga") || "00 horas";

    const inicio = localStorage.getItem("inicio") || "00/00/0000";
    const fim = localStorage.getItem("fim") || "00/00/0000";

    document.getElementById("inicio").textContent = formatarData(inicio);
    document.getElementById("fim").textContent = formatarData(fim);

    function formatarData(data) {
  const partes = data.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}
