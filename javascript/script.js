const costo_per_km = 0.21;
const age = parseInt(prompt('Inserire età'));
const km = parseInt(prompt('inserire km da percorrere'));

let costo_tot = costo_per_km * km;

if (age < 18) {
    costo_tot = costo_tot - (costo_tot * 0.2);
}

else if (age > 65) {
    costo_tot = costo_tot - (costo_tot * 0.4);
}

alert("il costo totale per la persona di età " + age + " che percorre " + km + "km è di " + costo_tot.toFixed(2) + "euro");

