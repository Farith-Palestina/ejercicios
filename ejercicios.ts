/* EJERCICIOS PARA MIERCOLES*/
/********************************************************************************************************************************/
enum TipoTransformacion {
    CIFRAR,
    DESCIFRAR
}

class encriptacionKaraca {
    palabra: string;
    readonly encriptacion: Record<string, number> = { 'a': 0, "e": 1, "i": 2, "o": 3, "u": 4};
    nuevaPalabra: string[] = [];

    constructor(palabra: string) {
        this.palabra = palabra;
    }

    invertirPalabra(tamanio: number) {
        for (let i = this.palabra.length - tamanio; i >= 0; i--) {
            this.nuevaPalabra.push(this.palabra[i])
        }
    }

    encDesPalabra(tipo: TipoTransformacion): string {
        this.nuevaPalabra = [];

        const invertirFactor = tipo === TipoTransformacion.CIFRAR ? 1 : 4;
        const resultadoFinal = tipo === TipoTransformacion.CIFRAR ? 'aca' : '';

        this.invertirPalabra(invertirFactor);

        for (let j = 0; j < this.nuevaPalabra.length; j++) {
            for (const parametro in this.encriptacion) {
                if (tipo === TipoTransformacion.CIFRAR) {
                    if (this.nuevaPalabra[j] === parametro) {
                        this.nuevaPalabra[j] = this.encriptacion[parametro].toString();
                    }
                } else {
                    if (this.nuevaPalabra[j] === this.encriptacion[parametro].toString()) {
                        this.nuevaPalabra[j] = parametro;
                    }
                }
            }
        }

        return this.palabra = this.nuevaPalabra.join("").concat(resultadoFinal);

    }
}

function encriptarKaraca() {
    const encDesKaraca = new encriptacionKaraca('electroencefalografista');
    console.log('Palabra cifrada: ' + encDesKaraca.encDesPalabra(TipoTransformacion.CIFRAR));
    console.log('Palabra descifrar: ' + encDesKaraca.encDesPalabra(TipoTransformacion.DESCIFRAR))
}

encriptarKaraca();
/********************************************************************************************************************************/
class Armstrong{
    numero: number;
    arregloNumero: number[] = [];
    tamanio: string;
    resultado:number;

    constructor(numero: number){
        this.numero = numero;
        this.tamanio = numero.toString();
        this.resultado = 0;
    }

    private calcular(): boolean{
        for(let i = 0; i < this.tamanio.length; i++){
            this.arregloNumero.push(parseInt(this.tamanio[i]));
            this.arregloNumero[i] = this.arregloNumero[i]**this.tamanio.length;
            this.resultado += this.arregloNumero[i];
        }
        return this.resultado === this.numero;
    }

    imprimirNumero(){
        let impresion: string = this.calcular()
            ? `el numero ${this.numero} es un numero de Armstrong: ${this.numero} === ${this.resultado}`
            : `el numero ${this.numero} no es un numero de Armstrong: ${this.numero} !== ${this.resultado}`;
        return impresion;
    }
}

function numeroArmstrong(){
    const armstrong:Armstrong = new Armstrong(370)
    console.log(armstrong.imprimirNumero());
}

numeroArmstrong();
/********************************************************************************************************************************/
