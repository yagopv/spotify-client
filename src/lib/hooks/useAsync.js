import React from 'react'

export const ASYNC_STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false)

  React.useLayoutEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])

  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  )
}

function asyncReducer(state, action) {
  switch (action.type) {
    case ASYNC_STATUS.PENDING: {
      return { status: ASYNC_STATUS.PENDING, data: null, error: null }
    }
    case ASYNC_STATUS.RESOLVED: {
      return {
        status: ASYNC_STATUS.RESOLVED,
        data: action.data,
        error: null,
      }
    }
    case ASYNC_STATUS.REJECTED: {
      return {
        status: ASYNC_STATUS.REJECTED,
        data: null,
        error: action.error,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function useAsync(initialState) {
  const [state, unsafeDispatch] = React.useReducer(asyncReducer, {
    status: ASYNC_STATUS.IDLE,
    data: null,
    error: null,
    ...initialState,
  })

  const dispatch = useSafeDispatch(unsafeDispatch)

  const { data, error, status } = state

  const run = React.useCallback(
    promise => {
      dispatch({ type: ASYNC_STATUS.PENDING })
      promise.then(
        data => {
          dispatch({ type: ASYNC_STATUS.RESOLVED, data })
        },
        error => {
          dispatch({ type: ASYNC_STATUS.REJECTED, error })
        },
      )
    },
    [dispatch],
  )

  const setData = React.useCallback(
    data => dispatch({ type: ASYNC_STATUS.RESOLVED, data }),
    [dispatch],
  )
  const setError = React.useCallback(
    error => dispatch({ type: ASYNC_STATUS.REJECTED, error }),
    [dispatch],
  )

  return {
    setData,
    setError,
    error,
    status,
    data,
    run,
  }
}

export { useAsync }
