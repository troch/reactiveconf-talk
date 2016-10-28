import createRouter from 'router5'
import listenersPlugin from 'router5/plugins/listeners'
import browserPlugin from 'router5/plugins/browser'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router5'

const routes = [
    { name: 'home', path: '/' },
    { name: 'schedule', path: '/schedule/:day' }
]

const router = createRouter(routes)
    .usePlugin(browserPlugin())
    .usePlugin(listenersPlugin())

router.start()

ReactDOM.render(
    <RouterProvider router={ router }>
        <App />
    </RouterProvider>,
    document.getElementById('root')
)
