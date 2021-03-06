import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Todos from '../components/Todos';
import PricingCards from '../components/PricingCards';
import Calculator from '../components/Calculator';
import ColorPicker from '../components/ColorPicker';
import GitHubProfileViewer from '../components/GitHubProfileViewer';

export default class Routes extends React.Component {

    render = () => {
        return (
            <Switch>
                <Route exact path='/' component={Home} />

                <Route exact path='/todos' component={Todos} />

                <Route exact path='/pricing-cards' component={PricingCards} />

                <Route exact path='/calculator' component={Calculator} />
                
                <Route exact path='/color-picker' component={ColorPicker} />
                
                <Route exact path='/github-profile-viewer' component={GitHubProfileViewer} />

                <Redirect to='/' from='*' />
            </Switch>
        );
    }
}