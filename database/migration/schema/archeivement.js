import { ARCHIEVEMENT_SCHEMA } from '../../helper/constant';

const archeivement = (sequalize, SEQUALIZE) => {
  return sequalize.define(ARCHIEVEMENT_SCHEMA, {
    id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    archieve_date: {
      type: SEQUALIZE.DATE,
      allowNull: false,
    },
    candidate_id: SEQUALIZE.INTEGER
  },  { underscored: true });
}

export default archeivement;
