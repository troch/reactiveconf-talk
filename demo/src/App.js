import React from 'react'
import { Link, withRoute } from 'react-router5'

function AppMenu() {
  return (
    <nav>
      <Link routeName='home'>Home</Link><br />
      <Link routeName='schedule' routeParams={{ day: 'wednesday' }}>
        Wednesday
      </Link>
    </nav>
  )
}

function AppMain(props) {
  const { route } = props

  if (!route) {
    return <h1>Route not found</h1>
  }
  if (route.name === 'home') {
    return <h1>Hello ReactiveConf!</h1>
  }
  if (route.name === 'schedule') {
    return <h1>Schedule for { route.params.day }</h1>
  }
}

const AppMainWithRoute = withRoute(AppMain)

export default function App(props) {
  return (
    <div>
      <AppMenu />
      <AppMainWithRoute />
    </div>
  )
}
