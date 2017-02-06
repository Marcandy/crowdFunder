const totalfund = null;

export const SAVE_FUND = 'SAVE_FUND';

export default (state = totalfund, action = { }) => {

  switch (action.type) {
    case SAVE_FUND:
    console.log(action, 'fund');
      return Object.assign({}, state, action.fund )

    default: return state

  }

}
