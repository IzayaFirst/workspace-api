import {LANGUAGE_SCHEMA, LANGUAGE} from '../../helper/constant';

const language = (sequalize, SEQUALIZE) => {
  return sequalize.define(LANGUAGE_SCHEMA, {
    id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    language: {
      type: SEQUALIZE.ENUM(LANGUAGE.THAI, LANGUAGE.ENGLISH, 
        LANGUAGE.CHINESE, LANGUAGE.JAPANESE, LANGUAGE.OTHER),
      allowNull: false,
    },
  },  { underscored: true });
}

export default language;
