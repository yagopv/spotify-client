import React from 'react'

const cache = new Map()

export const IDLE_STATUS = 'idle'
export const PENDING_STATUS = 'pending'
export const REJECTED_STATUS = 'rejected'
export const RESOLVED_STATUS = 'resolved'

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false)

  React.useLayoutEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])

  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch]
  )
}

function asyncReducer(state, action) {
  switch (action.type) {
    case PENDING_STATUS: {
      return { status: PENDING_STATUS, data: null, error: null }
    }
    case RESOLVED_STATUS: {
      return { status: RESOLVED_STATUS, data: action.data, error: null }
    }
    case REJECTED_STATUS: {
      return { status: REJECTED_STATUS, data: null, error: action.error }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function useAsync(initialState) {
  const [state, unsafeDispatch] = React.useReducer(asyncReducer, {
    status: IDLE_STATUS,
    data: null,
    error: null,
    ...initialState
  })

  const dispatch = useSafeDispatch(unsafeDispatch)

  const { data, error, status } = state

  const run = React.useCallback(
    (promise, cacheKey) => {
      const cachedData = cache.get(cacheKey)
      if (cachedData) {
        dispatch({ type: RESOLVED_STATUS, data: cachedData })
        return
      }

      dispatch({ type: PENDING_STATUS })

      promise.then(
        data => {
          dispatch({ type: RESOLVED_STATUS, data })
          if (cacheKey) {
            cache.set(cacheKey, data)
          }
        },
        error => {
          dispatch({ type: REJECTED_STATUS, error })
        }
      )
    },
    [dispatch]
  )

  const setData = React.useCallback(
    data => dispatch({ type: RESOLVED_STATUS, data }),
    [dispatch]
  )
  const setError = React.useCallback(
    error => dispatch({ type: REJECTED_STATUS, error }),
    [dispatch]
  )

  return {
    setData,
    setError,
    error,
    status,
    data,
    run
  }
}

export { useAsync }
