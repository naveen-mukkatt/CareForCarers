import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const questionnaireSchema = new Schema({
  questions: [
    {
      question: String,
      answer: String,
    },
  ],
});

export const Questionnaire = mongoose.model(
  "Questionnaire",
  questionnaireSchema
);
export default Questionnaire;
