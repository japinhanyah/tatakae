class Retangulo{
    constructor(altura , largura){
        this.altura= altura;
        this.largura= largura;
    }
  calcularArea(){
    return this.altura*this.largura
  }
  area(){
    return this.calcularArea()
  }
}


let quadrado = new Retangulo("10" , "10")
let retangulo = new Retangulo("60" , "30")
let penta = new Retangulo("90" , "30")

console.log(quadrado.calcularArea())
console.log(retangulo.calcularArea())
console.log(penta.calcularArea())