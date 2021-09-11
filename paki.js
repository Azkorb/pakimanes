var img = [];
img["Cauchin"] = "vaca.png";
img["Pokacho"] = "pollo.png";
img["Tocinauro"] = "cerdo.png";

var coleccion=[];
coleccion.push( new Pakiman("Cauchin", 100, 30, "Lacteo"));
coleccion.push( new Pakiman("Pokacho", 80, 50, "Electrico"));
coleccion.push( new Pakiman("Tocinauro", 120, 40, "Carniboro"));

for(var pakis of coleccion){
    pakis.mostrar();
}
for(var pakis in coleccion){
    console.log(coleccion[pakis]);
}