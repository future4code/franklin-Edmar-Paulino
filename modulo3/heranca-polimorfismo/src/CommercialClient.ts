import Commerce from "./Commerce";
import Client from "./Client";

class CommercialClient extends Commerce implements Client {
    public name: string;
    public registrationNumber: number;
    public consumedEnergy: number;
    private industryNumber: string;

    constructor(
        name: string,
        registrationNumber: number,
        consumedEnergy: number,
        industryNumber: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.industryNumber = industryNumber;
    }

    public getIndustryNumber(): string {
        return this.industryNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

}

export default CommercialClient;
