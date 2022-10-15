import { COMPETITION_TYPE, ICompetitionDB, ICompetitionResultDB } from "../../model/Competition";

export const competitions: ICompetitionDB[] = [
    {
        id: "f77d0fc1-e102-4075-850c-dd0fb5852f98",
        name: "Fast and Furious Heros",
        type: COMPETITION_TYPE.HUNDRED_DASH,
        finished: false
    },
    {
        id: "6f1977f4-7878-4279-8642-f731d00294fe",
        name: "Super Dart Championship",
        type: COMPETITION_TYPE.DART,
        finished: true
    }
];

export const results: ICompetitionResultDB[] = [
    {
        id: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
        competition_id: "f77d0fc1-e102-4075-850c-dd0fb5852f98",
        athlete: "Eliud Kipchoge",
        result: 20.5,
        remaining_attempts: 0
    },
    {
        id: "87e296be-a385-4ae6-8d51-ef546ac5a093",
        competition_id: "f77d0fc1-e102-4075-850c-dd0fb5852f98",
        athlete: "Tamirat Tola",
        result: 19.3,
        remaining_attempts: 0
    },
    {
        id: "c2418710-3de8-4c23-8db7-1b4e5b5d1267",
        competition_id: "f77d0fc1-e102-4075-850c-dd0fb5852f98",
        athlete: "Mosinet Geremew",
        result: 20.7,
        remaining_attempts: 0
    },
    {
        id: "ca49f9d5-dd2d-4695-97a8-2278c755bb1c",
        competition_id: "6f1977f4-7878-4279-8642-f731d00294fe",
        athlete: "Deta Hedman",
        result: 110,
        remaining_attempts: 0
    },
    {
        id: "a21a5147-fb88-43be-9baa-c906d7ad52e8",
        competition_id: "6f1977f4-7878-4279-8642-f731d00294fe",
        athlete: "Lisa Ashton",
        result: 105,
        remaining_attempts: 1
    },
    {
        id: "e0629197-27af-4c4e-abe8-e40a7054e99a",
        competition_id: "6f1977f4-7878-4279-8642-f731d00294fe",
        athlete: "Trina Gulliver",
        result: 107,
        remaining_attempts: 2
    }
];
