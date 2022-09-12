import Residence from "./Residence";
import Client from "./Client";

class ResidentialClient extends Residence implements Client {
    public name:string;
    public registrationNumber:number;
    public consumedEnergy:number;
    private cpf:string;

    constructor(
        name:string,
        registrationNumber:number,
        consumedEnergy:number,
        cpf:string,
        residentsQuantity:number,
        cep:string
    ) {
        super(residentsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cpf = cpf;
    }

    public calculateBill():number {
        return this.consumedEnergy * 0.75;
    }
}

export default ResidentialClient;