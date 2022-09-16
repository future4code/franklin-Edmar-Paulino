import { IUserDB, IUserFollowDB } from "../../model/User";
import { IRecipeDB } from "../../model/Recipe";

export const users: IUserDB[] = [
    {
        id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC" // bananinha
    },
    {
        id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO" // qwerty00
    },
    {
        id: "7079b8e4-95cd-48aa-82a9-77454e94b789",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i" // asdfg123
    }
];

export const followers: IUserFollowDB[] = [
    {
        id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        user_to_follow_id: "7079b8e4-95cd-48aa-82a9-77454e94b789"
    },
    {
        id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        user_to_follow_id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b"
    },
    {
        id: "7079b8e4-95cd-48aa-82a9-77454e94b789",
        user_to_follow_id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f"
    },
];

export const recipes: IRecipeDB[] = [
    {
        id: "4c3b5d9c-cd8d-4f1c-80eb-caeafae08347",
        creator_user_id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        title: "Pamonha mineira",
        description: "Rale as espigas ou corte-as rente ao sabugo e passe no liquidificador, juntamente com a água. Acrescente o coco, o açúcar e mexa bem. Coloque a massa na palha de milho e amarre bem. Em uma panela grande ferva bem a água, e vá colocando as pamonhas uma a uma após a fervura completa da água. Importante : a água deve estar realmente fervendo para receber as pamonhas, caso contrário elas vão se desfazer. Cozinhe por mais ou menos 40 minutos, retirando as pamonhas com o auxílio de uma escumadeira. Deixe esfriar em local bem fresco. Sirva com café e queijo ralado.",
        created_at: new Date()
    },
    {
        id: "d4973ba0-b5ee-45c2-ae4e-79c10213f0a4",
        creator_user_id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        title: "Brigadeiro",
        description: "Em uma panela funda, acrescente o leite condensado, a margarina e o achocolatado (ou 4 colheres de sopa de chocolate em pó). Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela. Deixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado.",
        created_at: new Date()
    },
    {
        id: "e503543c-d121-4ed8-9fa6-3e85587e740d",
        creator_user_id: "7079b8e4-95cd-48aa-82a9-77454e94b789",
        title: "Paçoca",
        description: "Triture as bolachas no liquidificador e coloque em uma tigela com o leite condensado e o amendoim até obter um creme homogêneo. Coloque o creme em uma forma e leve à geladeira por alguns minutos. Corte em pedaços e sirva.",
        created_at: new Date()
    }
];
