import React from "react";
import { getByText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Home Page tests", () => {
    test("Indicador de quantidade de produtos começa em 3", () => {
        const { getByText } = render(<App />);
        const indicadorQuantidade = getByText(/Quantidade de produtos/i);

        expect(indicadorQuantidade).toHaveTextContent("Quantidade de produtos: 3");
        expect(indicadorQuantidade.textContent).toBe("Quantidade de produtos: 3");
    });

    test("Sem valor mínimo, há quatro produtos, e isso é indicado corretamente", async () => {
        const { getByText, getByLabelText, getAllByText } = render(<App />);

        const indicadorQuantidade = getByText(/Quantidade de produtos/i);

        const filtroMin = getByLabelText(/Filtro Mínimo/i);

        // await userEvent.type(filtroMin, "{backspace}".repeat(2));
       userEvent.clear(filtroMin);

        const produtos = getAllByText(/Produto /);

        expect(produtos).toHaveLength(4);
        expect(produtos.length).toBe(4);

        expect(indicadorQuantidade).toHaveTextContent("Quantidade de produtos: 4");
        expect(indicadorQuantidade.textContent).toBe("Quantidade de produtos: 4");
    });

    test("Filtro de busca por nome funciona, e encontra produto com 'legal' no nome", () => {
        // {
        //     const { getAllByText, getByLabelText } = render(<App />);
        //     const filtroNome = getByLabelText("Busca por nome:");
        //     userEvent.type(filtroNome, "legal");
        //     const produtos = getAllByText(/Produto /);
        //     expect(produtos).toHaveLength(1);
        // }
        const { getByLabelText, getAllByText } = render(<App />);

        const buscaNome = getByLabelText(/Busca por nome/i);
        userEvent.type(buscaNome, "legal");

        const produtos = getAllByText(/Produto /);
        expect(produtos).toHaveLength(1);

        const [ produtoLegal ] = produtos;
        expect(produtoLegal).toHaveTextContent("Produto legal");
    });

    test("Ordenação decrescente garante produto de preço maior na frente.", () => {
        // {
        //     const { getAllByText, getByLabelText, getByText } = render(<App />);
        //     const ordenacaoSelect = getByLabelText(/Ordenação:/);
        //     userEvent.selectOptions(ordenacaoSelect, getByText(/Decrescente/));
        //     const [primeiro, segundo] = getAllByText(/R\$/);
        //     const precoPrimeiro = Number(
        //         primeiro.textContent.split(" ")[1].split(",")[0]
        //     );
        //     const precoSegundo = Number(
        //         segundo.textContent.split(" ")[1].split(",")[0]
        //     );
        //     expect(precoPrimeiro).toBeGreaterThan(precoSegundo);
        // }
        const { getByLabelText, getByText, getAllByText } = render(<App />);

        const ordenacao = getByLabelText(/Ordenação/i);

        userEvent.selectOptions(ordenacao, getByText(/Decrescente/));
        
        const precos = getAllByText(/^R\$/).map(({ textContent }) => Number(textContent.split(" ")[1].replace(",", ".")));
       
        for (let i = 0; i + 1 < precos.length; i++) {
            expect(precos[i]).toBeGreaterThan(precos[i + 1]);
        }
    });
});
