import React, { Component } from 'react'

import MainTabNavigator from './MainTabNavigator'

export default class App extends Component {
    constructor(props) {
        super(props);
            this.state= {
                prim_I: 0,
                second_I: 0,
                prim_U: 0,
                second_U: 0,
                prim_I0: 0,
                second_I0: 0,
                coef_I: 0,
                coef_U: 0,
                coef_I0: 0,
                coef_I00: 0,
                seuil_I: 0,
                seuil_U: 0,
                seuil_I0: 0,
                inj_I: 0,
                inj_I1: 0,
                inj_I2: 0,
                inj_U: 0,
                inj_I0: 0,
                maj: false,
            }
        this.calc_coef = this.calc_coef.bind(this);
        this.calc_seuil = this.calc_seuil.bind(this);
        }

        calc_coef = () => {
            this.setState({coef_I: this.state.second_I / this.state.prim_I})
            this.setState({coef_U: this.state.second_U / this.state.prim_U})
            this.setState({coef_I0: this.state.second_I0 / this.state.prim_I0})
        }
        calc_seuil = () => {
            this.setState({inj_I: this.state.seuil_I * this.state.coef_I})
            this.setState({inj_I1: (this.state.seuil_I * this.state.coef_I) * 0.95 })
            this.setState({inj_I2: (this.state.seuil_I * this.state.coef_I) * 1.1 })
            this.setState({inj_U: (this.state.seuil_U * this.state.coef_U) / 1.732 })
            this.setState({inj_I0: this.state.seuil_I0 * this.state.coef_I0})
        }
        setPrim_I = (prim_I) => {
            this.setState({prim_I: prim_I})
        }
        setSecond_I = (second_I) => {
            this.setState({second_I: second_I})
        }
        setPrim_U = (prim_U) => {
            this.setState({prim_U: prim_U})
        }
        setSecond_U = (second_U) => {
            this.setState({second_U: second_U})
        }
        setPrim_I0 = (prim_I0) => {
            this.setState({prim_I0: prim_I0})
        }
        setSecond_I0 = (second_I0) => {
            this.setState({second_I0: second_I0})
        }
        setSeuil_I = (seuil_I) => {
            this.setState({seuil_I: seuil_I})
        }
        setSeuil_U = (seuil_U) => {
            this.setState({seuil_U: seuil_U})
        }
        setSeuil_I0 = (seuil_I0) => {
            this.setState({seuil_I0: seuil_I0})
        }

    render() {
        return (
            <MainTabNavigator
                screenProps = {{
                    ...this.state,
                    setPrim_I : this.setPrim_I,
                    setSecond_I : this.setSecond_I,
                    setPrim_U : this.setPrim_U,
                    setSecond_U : this.setSecond_U,
                    setPrim_I0 : this.setPrim_I0,
                    setSecond_I0 : this.setSecond_I0,
                    setSeuil_I : this.setSeuil_I,
                    setSeuil_U : this.setSeuil_U,
                    setSeuil_I0 : this.setSeuil_I0,
                    calc_coef : this.calc_coef,
                    calc_seuil : this.calc_seuil,
                }}
            />
        )
    }
}
