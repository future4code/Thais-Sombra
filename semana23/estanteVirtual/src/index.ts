import app from "./app";
import CompetitionController from "./controller/CompetitionController";
import ResultController from "./controller/ResultController";

const competitionController = new CompetitionController();
const resultController = new ResultController();

app.post("/register/competition", competitionController.insertCompetition);
app.get("/competitions", competitionController.getAllCompetitions);
app.put("/update/competitions/:id",competitionController.updateStatusCompetitionToFinished);

app.post("/register/athleteresult/:id",resultController.insertAthleteResult);