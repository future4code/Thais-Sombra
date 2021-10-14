import CompetitionBusiness from "../src/business/CompetitionBusiness";
import AthleteBusiness from "../src/business/AthleteBusiness";
import ResultBusiness from "../src/business/ResultBusiness";
import { CompetitionDTO, STATUS } from "../src/model/Competition";
import { AthleteDTO } from "../src/model/Athlete";
import { ResultDTO, UNIT } from "../src/model/AthleteResult";

describe("", () => {

    test("Error when name is null on insertCompetition", async()=>{
        expect.assertions(1);
        const competitionDTO: CompetitionDTO={
            name: "",
            status:STATUS.INPROGRESS
        };
        try{
            await new CompetitionBusiness().insertCompetition(competitionDTO);
        } catch(error: any) {
            expect(error.message).toBe("Preencha todos os campos")
        };
    });

    test("Error when status is null on insertCompetition", async()=>{
        expect.assertions(1);
        const competitionDTO ={
            name: "Floki",
            status: ""
        };
        try{
            await new CompetitionBusiness().insertCompetition(competitionDTO);
        } catch(error: any) {
            expect(error.message).toBe("Preencha todos os campos")
        };
    });

    test("Error when name is null on insertAthlete", async()=>{
        expect.assertions(1);
        const athleteDTO: AthleteDTO={
            name: ""
        };
        try{
            await new AthleteBusiness().insertAthlete(athleteDTO);
        } catch(error: any) {
            expect(error.message).toBe("Preencha todos os campos")
        };
    });

    test("Error when athleteId is null on insertAthleteResult", async()=>{
        expect.assertions(1);
        const params = "";
        const resultDTO: ResultDTO={
            athleteId: "",
            value: 20,
            unit: UNIT.METROS,
            competitionId: "123"
        };
        try{
            await new ResultBusiness().insertAthleteResult(params,resultDTO);
        } catch(error: any) {
            expect(error.message).toBe("Preencha todos os campos")
        };
    });

    test("Error when value is null on insertAthleteResult", async()=>{
        expect.assertions(1);
        const params = "123";
        const resultDTO: ResultDTO={
            athleteId: "",
            value: 0,
            unit: UNIT.METROS,
            competitionId: "123"
        };
        try{
            await new ResultBusiness().insertAthleteResult(params,resultDTO);
        } catch(error: any) {
            expect(error.message).toBe("Preencha todos os campos")
        };
    });

    test("Error when competitionId is null on insertAthleteResult", async()=>{
        expect.assertions(1);
        const params = "123";
        const resultDTO: ResultDTO={
            athleteId: "",
            value: 20,
            unit: UNIT.METROS,
            competitionId: ""
        };
        try{
            await new ResultBusiness().insertAthleteResult(params,resultDTO);
        } catch(error: any) {
            expect(error.message).toBe("Preencha todos os campos")
        };
    });

});
