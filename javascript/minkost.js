document.getElementById("beregner").addEventListener("click", hvis);

function hvis() {
    if (document.getElementById("ikkeAktiv").checked) {
        calculate();
    } else if (document.getElementById("moderatAktiv").checked) {
        beregner();
    } else if (document.getElementById("megetAktiv").checked) {
        megetAktiv();
    }
}

function beregner() {
    let hej = document.getElementById("vaegtInput").value;
    let kilo = hej * 33;
    document.getElementById('resultat').innerHTML = `Du skal indtage ca ${kilo}kcal om dagen.`;
}

function calculate() {
    let halløj = document.getElementById("vaegtInput").value;
    let vaegt = halløj * 27;
    document.getElementById('resultat').innerHTML = `Du skal indtage ca ${vaegt}kcal om dagen.`;
}

function megetAktiv() {
    let aktiv = document.getElementById("vaegtInput").value;
    let kalorie = aktiv * 37;
    document.getElementById('resultat').innerHTML = `Du skal indtage ca ${kalorie}kcal om dagen.`;
}
