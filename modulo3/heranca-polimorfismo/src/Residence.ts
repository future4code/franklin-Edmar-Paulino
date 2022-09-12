import Place from "./Place";

class Residence extends Place {
    protected residentsQuantity:number;

    constructor(residentsQuantity:number, cep:string) {
        super(cep);
        this.residentsQuantity = residentsQuantity;        
    }

    public getResidentsQuantity():number {
        return this.residentsQuantity;
    }
}

export default Residence;
