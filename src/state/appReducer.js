import { SELECTED_CARD } from './types'

const handlers = {
  [SELECTED_CARD]: (state, { payload }) => ({
    ...state,
    cards: payload,
  }),
  DEFAULT: (state) => state,
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT

  return handler(state, action)
}
