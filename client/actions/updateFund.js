export const SAVE_FUND = 'SAVE_FUND';

export function updateFund (fund) {// action creator
  return {
    type: SAVE_FUND,
    fund
  }
}
