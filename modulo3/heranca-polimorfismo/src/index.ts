import User from "./User";
import Customer from "./Customer";
import Client from "./Client";
import Place from "./Place";
import Residence from "./Residence";
import Commerce from "./Commerce";
import Industry from "./Industry";
import ResidentialClient from "./ResidentialClient";
import CommercialClient from "./CommercialClient";

// const naruto:User = new User("007", "naruto@konoha.com.jp", "Naruto Uzumaki", "hokage");
// console.log(`ID: ${naruto.getId()}\nNome: ${naruto.getName()}\nEmail: ${naruto.getEmail()}`);

// const goku:Customer = new Customer("004", "goku@sayajin.com.jp", "Son Goku", "gohan", "7777-7777-7777-7777");
// console.log(`ID: ${goku.getId()}\n\
// Nome: ${goku.getName()}\n\
// Email: ${goku.getEmail()}\n\
// Valor total de compra: ${goku.purchaseTotal}\n\
// Cartão de crédito: ${goku.getCreditCard()}`);

// console.log(goku.introduceYourself());

// const client:Client = {
//     name: "Sasuke Uchiha",
//     registrationNumber: 1,
//     consumedEnergy: 100,
//     calculateBill: ():number =>  {
//         return 2;
//     }
// }

// console.log(`Nome: ${client.name}\n\
// Número de Registro: ${client.registrationNumber}\n\
// Energia consumida: ${client.consumedEnergy}\n\
// Valor da Conta: ${client.calculateBill}`);

// const place:Place = new Place();

// const residence:Residence = new Residence(2, "12345-678");
// const commerce:Commerce = new Commerce(5, "12345-876");
// const industry:Industry = new Industry(13, "54321-678");

// console.log(residence.getCep());
// console.log(residence.getResidentsQuantity());
// console.log(commerce.getCep());
// console.log(commerce.getFloorsQuantity());
// console.log(industry.getCep());
// console.log(industry.getMachinesQuantity());

// const residentailClient:ResidentialClient = new ResidentialClient("Hinata Hyuga", 8, 100, "888888888-88", 4, "88888-777");
// console.log(residentailClient.getCep());
// console.log(residentailClient.calculateBill());

const commercialClient: CommercialClient = new CommercialClient("Ishiraku Ramen", 7, 300, "99888777000166", 1, "88888-777");
console.log(commercialClient.getCep());
console.log(commercialClient.calculateBill());