import Place from "./Place";

class Industry extends Place {
    protected machinesQuantity:number;

    constructor(machinesQuantity:number, cep:string) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
    }

    public getMachinesQuantity():number {
        return this.machinesQuantity;
    }
}

export default Industry;
