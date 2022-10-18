import React from "react";
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import App from "./App";
import axios from "axios";

const LOTERIAS = [
    {
      id: 0,
      nome: "mega-sena"
    },
    {
      id: 1,
      nome: "quina"
    },
    {
      id: 2,
      nome: "lotofácil"
    },
    {
      id: 3,
      nome: "lotomania"
    },
    {
      id: 4,
      nome: "timemania"
    },
    {
      id: 5,
      nome: "dia de sorte"
    }
];

const LOTERIAS_CONCURSOS = [
    {
      loteriaId: 0,
      concursoId: "2359"
    },
    {
      loteriaId: 1,
      concursoId: "5534"
    },
    {
      loteriaId: 2,
      concursoId: "2200"
    },
    {
      loteriaId: 3,
      concursoId: "2167"
    },
    {
      loteriaId: 4,
      concursoId: "1622"
    },
    {
      loteriaId: 5,
      concursoId: "440"
    }
];

const CONCURSO_ID = "2167";

const CONCURSO = {
    id: "2167",
    loteria: 3,
    numeros: [
      "02",
      "07",
      "18",
      "26",
      "27",
      "37",
      "38",
      "39",
      "43",
      "47",
      "51",
      "54",
      "57",
      "61",
      "67",
      "71",
      "77",
      "82",
      "88",
      "99"
    ],
    data: "2022-10-08T14:48:31.241Z"
};

jest.mock('axios');

describe("Requisitions tests", () => {

    test("First render lotteries requisitions", () => {
        axios.get.mockResolvedValue(LOTERIAS);

        render(<App />);

        expect(axios.get).toHaveBeenCalledTimes(2);
        expect(axios.get).toHaveBeenCalledWith("https://brainn-api-loterias.herokuapp.com/api/v1/loterias");
        expect(axios.get).toHaveBeenCalledWith("https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos");
    });

    // test("Select lottery requisition", () => {
    //     axios.get.mockResolvedValue(CONCURSO);
    //     const { getByRole } = render(<App />);
    //     const selection = getByRole(selection);
    //     selection.
    //     expect(axios.get).toHaveBeenCalledTimes(1);
    //     expect(axios.get).toHaveBeenCalledWith(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${CONCURSO_ID}`);
    // });
});
