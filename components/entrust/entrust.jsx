import React from 'react';
import { renderRoutes } from 'react-router-config'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <h2>area entrust{renderRoutes(route.routes)}</h2>
            </div>
        )
    }
}