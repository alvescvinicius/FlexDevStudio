import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bitcoin: {}
        };

    }

    componentDidMount() {

        /**
         * -----------------------------------------------------------------------
         * - 13/03/2021 - BITCOIN - cointradermonitor.com
         * -----------------------------------------------------------------------
         * - API encontrada para monitorar a variacao do BITCOIN de forma GRATUITA.
         */
        let url = 'https://cointradermonitor.com/api/pbb/v1/ticker';
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                let state = this.state;
                state.bitcoin = json;
                this.setState(state);
                console.log(json);
                console.log(this.state.bitcoin);
            })
    }

    render() {
        return (
            <div className="container">
                <header>
                    <strong>React bitcoin</strong>
                    <p>{this.state.bitcoin.pair}</p>
                </header>


            </div>
        );
    }
}

export default Home;