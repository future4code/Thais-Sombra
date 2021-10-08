import app from "./app";
import AthleteController from "./controller/AthleteController";
import CompetitionController from "./controller/CompetitionController";
import ResultController from "./controller/ResultController";

const competitionController = new CompetitionController();
const resultController = new ResultController();
const athleteController = new AthleteController();

app.post("/register/competition", competitionController.insertCompetition);
app.get("/competitions", competitionController.getAllCompetitions);
app.get("/competition/:id", competitionController.getCompetitionById);
app.put("/update/competitions/:id",competitionController.updateStatusCompetitionToFinished);

app.post("/register/athleteresult/:id",resultController.insertAthleteResult);
app.get("/results/competition/:id", resultController.getAllResultsByCompetitionId);

app.post("/register/athlete",athleteController.insertAthlete);
app.get("/athletes", athleteController.getAllAthletes);