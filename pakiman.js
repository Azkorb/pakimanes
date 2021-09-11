class Pakiman
{
    constructor(n,v,a,t){
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.tipo = t;
        this.imagen = new Image();
        this.imagen.src = img[this.nombre]
    }
    hablar()
    {
        alert(this.nombre);        
    }
    mostrar()
    {
        document.write("<p>")
        document.body.appendChild(this.imagen);
        document.write("<strong>"+ "Nombre: " + this.nombre + "</strong><br>")
        document.write("<strong>" + "Vida: " + this.vida + "</strong><br>")
        document.write("<strong>" + "Ataque: "+this.ataque + "</strong><br>")
        document.write("<strong>" + "Tipo: "+this.tipo + "</strong><hr>")
        document.write("</p>")
    }
}
