import React from 'react'
import {Route} from "react-router"

function RouteWithLayout(props) {
    const {layout: Layout, component: Component, ...rest} = props
    return (
        <Route {...rest}
            render={props => (
                <Layout>
                    <Component {...props}/>
                </Layout>
            )}
        >
            
        </Route>
    )
}

export default RouteWithLayout
