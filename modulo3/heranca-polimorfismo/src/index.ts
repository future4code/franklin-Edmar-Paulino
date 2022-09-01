import User from "./User";
import Customer from "./Customer";
import Client from "./Client";
import Place from "./Place";

const naruto:User = new User("007", "naruto@konoha.com.jp", "Naruto Uzumaki", "hokage");
console.log(`ID: ${naruto.getId()}\nNome: ${naruto.getName()}\nEmail: ${naruto.getEmail()}`);

const goku:Customer = new Customer("004", "goku@sayajin.com.jp", "Son Goku", "gohan", "7777-7777-7777-7777");
console.log(`ID: ${goku.getId()}\n\
Nome: ${goku.getName()}\n\
Email: ${goku.getEmail()}\n\
Valor total de compra: ${goku.purchaseTotal}\n\
Cartão de crédito: ${goku.getCreditCard()}`);

console.log(goku.introduceYourself());

const client:Client = {
    name: "Sasuke Uchiha",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: ():number =>  {
        return 2;
    }
}

console.log(`Nome: ${client.name}\n\
Número de Registro: ${client.registrationNumber}\n\
Energia consumida: ${client.consumedEnergy}\n\
Valor da Conta: ${client.calculateBill}`);

const place:Place = new Place();