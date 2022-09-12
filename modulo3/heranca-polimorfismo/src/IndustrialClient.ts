import Industry from "./Industry";
import Client from "./Client";

class IndustrialClient extends Industry implements Client {
    public name: string;
    public registrationNumber: number;
    public consumedEnergy: number;
    private cnpj: string;

    constructor(
        name: string,
        registrationNumber: number,
        consumedEnergy: number,
        cnpj: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
    }

    

    public calculateBill(): number {
        return (this.consumedEnergy * 0.45) + (this.machinesQuantity * 100);
    }
}

export default IndustrialClient;