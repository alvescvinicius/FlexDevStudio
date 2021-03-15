import React, { Component } from 'react';
import './home.css';

import * as moment from 'moment';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bitcoin: {},
            bitcoinExchange24H: {}
        };

        // Necessario bind para acionar por acoes na pagina por ex um botao
        // this.getBitCoinValue = this.getBitCoinValue.bind(this);

    }

    componentDidMount() {

        this.getBitCoinValue();
        this.getBitCoinValueByDate("2021-03-01T00:00:00-0300");

    }

    /**
     * @returns BitCoinValue
     */
    getBitCoinValue() {
        /**
        * -----------------------------------------------------------------------
        * - 13/03/2021 - BITCOIN - cointradermonitor.com
        * -----------------------------------------------------------------------
        * - API encontrada para monitorar a variacao do BITCOIN de forma GRATUITA.
        * {
           "pair": "BTCBRL",
           "last": 340644.47,
           "volume24h": 1030.75,
           "var24h": 6.98,
           "time": "2021-03-14T00:17:00-0300"
           }
        */
        let url = 'https://cointradermonitor.com/api/pbb/v1/ticker';
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                let state = this.state;
                state.bitcoin = json;
                this.setState(state);
                //  console.log(json);
                //  console.log(this.state.bitcoin);
            })
    }

    /**
     * @returns getBitCoinValueByDate
     */
    getBitCoinValueByDate(date) {

        const NewDate = moment(date);
        console.log("--> DATE: " + NewDate.format("DD-MM-YYYY"));

        let url = "https://cointradermonitor.com/api/pbb/v1/ticker?exchanges=true&time=" + NewDate.format("DD-MM-YYYY") + "T00:00:00-0300";
        console.log("--> URL: " + url);
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                let state = this.state;
                state.bitcoinExchange24H = json;
                this.setState(state);
                //console.log(json);
                console.log("--> Exchange: " + this.state.bitcoinExchange24H);
            })
    }

    /**
    * @returns getIndicatorStatus
    */
    getIndicatorStatus(var24h) {

        let status;

        if (var24h == null) {
            status = "fds-ctp-monitor-indicator-last loading";
            return (
                <h3>Carregando...</h3>
            );
        }

        if (var24h > 0) {
            status = "fds-ctp-monitor-indicator-last up";
        } else if (var24h < 0) {
            status = "fds-ctp-monitor-indicator-last down";
        } else {
            status = "fds-ctp-monitor-indicator-last stable";
        }

        return (
            <div className="fds-ctp-monitor">
                <div className="fds-ctp-monitor-indicator">
                    <label>{this.state.bitcoin.pair} {var24h}</label>
                    <span className={status}> {this.state.bitcoin.last}</span>
                </div>
            </div>
        );

    }

    render() {
        return (
            <div>
                {this.getIndicatorStatus(this.state.bitcoin.var24h)}
            </div>
        )
    };
}

export default Home;