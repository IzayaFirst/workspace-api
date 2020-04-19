import { APPLY_POSITION } from '../../helper/constant';

const applyPosition = (sequalize, SEQUALIZE) => {
  return sequalize.define(APPLY_POSITION, {
    apply_position_id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    candidate_id: SEQUALIZE.INTEGER,
    position_id: SEQUALIZE.INTEGER,
  },  { underscored: true, freezeTableName: true,  });
}

export default applyPosition;
