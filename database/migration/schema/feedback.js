import { FEEDBACK } from '../../helper/constant';

const applyStatus = (sequalize, SEQUALIZE) => {
  return sequalize.define(FEEDBACK, {
    id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    apply_position_id: SEQUALIZE.INTEGER,
    candidate_id: SEQUALIZE.INTEGER,
    comment:  {
      type: SEQUALIZE.TEXT,
      allowNull: false,
    },
    rating: {
      type: SEQUALIZE.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 }
    }
  },  { underscored: true });
}

export default applyStatus;
