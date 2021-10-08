import app from "./app";
import AthleteController from "./controller/AthleteController";
import CompetitionController from "./controller/CompetitionController";
import ResultController from "./controller/ResultController";

const competitionController = new CompetitionController();
const resultController = new ResultController();
const athleteController = new AthleteController();

app.post("/register/competition", competitionController.insertCompetition);
app.get("/competitions", competitionController.getAllCompetitions);
app.put("/update/competitions/:id",competitionController.updateStatusCompetitionToFinished);

app.post("/register/athleteresult/:id",resultController.insertAthleteResult);

app.post("/register/athlete",athleteController.insertAthlete);