export enum COMPETITION_TYPE {
    HUNDRED_DASH = "HUNDRED_DASH",
    DART = "DART"
}

export interface ICreateCompetitionInputDTO {
    name: string,
    type: COMPETITION_TYPE
}

export interface IRegisterCompetitionResultInputDTO {
    competitionId: string,
    athlete: string,
    result: number
}

export interface IRanking {
    id: string,
    name: string,
    result: number
}

export interface IRankingOutputDTO {
    name: string,
    finished: boolean,
    ranking: IRanking[]
}

export interface IRegisterNewTryInputDTO {
    id: string,
    newResult: number
}

export interface IIDInputDTO {
    id: string
}

export interface IIDOutputDTO {
    id: string
}

export interface IMessageOutputDTO {
    message: string
}

export interface ICompetitionDB {
    id: string,
    name: string,
    type: COMPETITION_TYPE,
    finished: boolean
}

export interface ICompetitionResultDB {
    id: string,
    competition_id: string,
    athlete: string,
    result: number,
    tries: number
}

export interface IStatusCode {
    code: number,
    reset: () => {}
}

export class Competition {
    constructor(
        private id: string,
        private name: string,
        private type: COMPETITION_TYPE,
        private finished: boolean = false
    ) {}

    public getId = (): string => this.id;

    public getName = (): string => this.name;

    public getType = (): COMPETITION_TYPE => this.type;

    public getFinished = (): boolean => this.finished;
}

export class CompetitionResult {
    constructor(
        private id: string,
        private competitionId: string,
        private athlete: string,
        private result: number,
        private tries: number
    ) {}

    public getId = (): string => this.id;

    public getCompetitionId = (): string => this.competitionId;

    public getAthlete = (): string => this.athlete;

    public getResult = (): number => this.result;

    public getTries = (): number => this.tries;
}
