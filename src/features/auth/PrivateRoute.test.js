import React from 'react'
import { render } from '@testing-library/react'
import * as reactRouter from 'react-router'
import { MemoryRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import * as authContext from '../../lib/context/auth-context'

function Component() {
  return <p>Try to find this</p>
}

describe('<PrivateRoute />', () => {
  it('should render the component if the user is authenticated', () => {
    authContext.useAuth = jest.fn(() => [
      {
        isAuthenticated: true,
      },
    ])

    const { getByText } = render(
      <PrivateRoute exact path="/" component={Component} />,
      {
        wrapper: MemoryRouter,
      },
    )

    expect(getByText('Try to find this').textContent).toEqual(
      'Try to find this',
    )
  })

  it('should render the Login component when the user is not authenticated', () => {
    authContext.useAuth = jest.fn(() => [
      {
        isAuthenticated: false,
      },
    ])

    render(<PrivateRoute exact path="/" component={Component} />, {
      wrapper: MemoryRouter,
    })
    const redirect = jest.spyOn(reactRouter, 'Redirect')
    expect(redirect).toHaveBeenCalledTimes(1)
    expect(redirect).toHaveBeenCalledWith({ to: '/login' }, {})
  })
})
