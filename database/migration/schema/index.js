import CandidateSchema from './candidate.js';

const intitialSchema = (sequalize, SEQUALIZE) => {
  const candidate = CandidateSchema(sequalize, SEQUALIZE)
};

export default intitialSchema;