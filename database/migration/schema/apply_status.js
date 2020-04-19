import { APPLY_STATUS, INTERVIEW_STATUS } from '../../helper/constant';

const applyStatus = (sequalize, SEQUALIZE) => {
  return sequalize.define(APPLY_STATUS, {
    apply_status_id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    apply_position_id: SEQUALIZE.INTEGER,
    status: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    }
  },  { underscored: true, freezeTableName: true, });
}

export default applyStatus;
