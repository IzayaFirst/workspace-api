import { CANDIDATE_LANGUAGE_SCHEMA } from '../../helper/constant';

const candidateLanguage = (sequalize, SEQUALIZE) => {
  return sequalize.define(CANDIDATE_LANGUAGE_SCHEMA, {
    candidate_language_id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    candidate_id: SEQUALIZE.INTEGER,
    language_id: SEQUALIZE.INTEGER,
  },  { underscored: true, freezeTableName: true, });
}

export default candidateLanguage;
