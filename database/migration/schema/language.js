import {LANGUAGE_SCHEMA, LANGUAGE} from '../../helper/constant';

const language = (sequalize, SEQUALIZE) => {
  return sequalize.define(LANGUAGE_SCHEMA, {
    language_id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    language: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
  },  { underscored: true, freezeTableName: true, });
}

export default language;
