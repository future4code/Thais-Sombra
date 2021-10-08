import app from "./app";
import CompetitionController from "./controller/CompetitionController";

const competitionController = new CompetitionController();

app.post("/register/competition", competitionController.insertCompetition);
app.get("/", competitionController.getAllCompetitions);