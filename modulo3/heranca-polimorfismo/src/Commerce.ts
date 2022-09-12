import Place from "./Place";

class Commerce extends Place {
    protected floorsQuantity:number;

    constructor(floorsQuantity:number, cep:string) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
    }

    public getFloorsQuantity():number {
        return this.floorsQuantity;
    }
}

export default Commerce;
