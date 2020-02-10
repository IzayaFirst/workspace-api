import { APPLY_STATUS, INTERVIEW_STATUS } from '../../helper/constant';

const applyStatus = (sequalize, SEQUALIZE) => {
  return sequalize.define(APPLY_STATUS, {
    id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    apply_position_id: SEQUALIZE.INTEGER,
    status: {
      type: SEQUALIZE.ENUM(INTERVIEW_STATUS.ACCECPT, INTERVIEW_STATUS.IN_PROGRESS,
        INTERVIEW_STATUS.HIRE, INTERVIEW_STATUS.INTERVIEW, INTERVIEW_STATUS.REJECT, 
        INTERVIEW_STATUS.DECLINE, INTERVIEW_STATUS.PENDING),
      allowNull: false,
    }
  },  { underscored: true });
}

export default applyStatus;
