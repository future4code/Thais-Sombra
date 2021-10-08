export enum UNIT {
    METROS = "m",
    SEGUNDOS = "s"
};

export interface ResultDTO {
    athlete: string
    value: number
    unit: UNIT
    competitionId: string
};
