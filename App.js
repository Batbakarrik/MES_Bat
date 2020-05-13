import React, { Component } from 'react'

import MainTabNavigator from './MainTabNavigator'

export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //         this.state= {
    //             prim_I: 0,
    //             second_I: 5,
    //             prim_U: 0,
    //             second_U: 110,
    //             coef_I: 0,
    //             coef_U: 0,
    //             seuil_I: 0,
    //             seuil_U: 0,
    //             seuil_V: 0,
    //             inj_I: 0,
    //             inj_I1: 0,
    //             inj_I2: 0,
    //             inj_U: 0,
    //             inj_V: 0,
    //             maj: false,
    //             curve: 0,
    //             k: 1,
    //             temps1: 0,
    //             temps2: 0,
    //             temps3: 0,
    //             seuil_Ix1: 0,
    //             seuil_Ix2: 0,
    //             seuil_Ix3: 0,
    //         }
    //     this.calc_seuilI = this.calc_seuilI.bind(this);
    //     this.calc_seuilISIT = this.calc_seuilISIT.bind(this);
    //     this.calc_seuilIVIT = this.calc_seuilIVIT.bind(this);
    //     this.calc_seuilIEIT = this.calc_seuilIEIT.bind(this);
    //     this.calc_seuilU = this.calc_seuilU.bind(this);
    //     }

    //     calc_seuilI = async() => {
    //         await this.setState({coef_I: this.state.second_I / this.state.prim_I})
    //         await this.setState({inj_I: this.state.seuil_I * this.state.coef_I * 0.95})
    //         await this.setState({inj_I1: (this.state.seuil_I * this.state.coef_I) * 1})
    //         await this.setState({inj_I2: (this.state.seuil_I * this.state.coef_I) * 1.1})
    //     }
    //     calc_seuilISIT = async() => {
    //         await this.setState({coef_I: this.state.second_I / this.state.prim_I})
    //         await this.setState({inj_I: (this.state.seuil_I * this.state.coef_I) * this.state.seuil_Ix1})
    //         await this.setState({inj_I1: (this.state.seuil_I * this.state.coef_I) * this.state.seuil_Ix2})
    //         await this.setState({inj_I2: (this.state.seuil_I * this.state.coef_I) * this.state.seuil_Ix3})
    //         await this.setState({temps1: ((this.state.k/2.97)*(0.14/((Math.pow((this.state.inj_I),0.02))-1)))})
    //         await this.setState({temps2: ((this.state.k/2.97)*(0.14/((Math.pow((this.state.inj_I1),0.02))-1)))})
    //         await this.setState({temps3: ((this.state.k/2.97)*(0.14/((Math.pow((this.state.inj_I2),0.02))-1)))})
    //     }
    //     calc_seuilIVIT = async() => {
    //         await this.setState({coef_I: this.state.second_I / this.state.prim_I})
    //         await this.setState({inj_I: (this.state.seuil_I * this.state.coef_I) * this.state.seuil_Ix1})
    //         await this.setState({inj_I1: (this.state.seuil_I * this.state.coef_I) * this.state.seuil_Ix2})
    //         await this.setState({inj_I2: (this.state.seuil_I * this.state.coef_I) * this.state.seuil_Ix3})
    //         await this.setState({temps1: ((this.state.k/1.5)*(13.5/((Math.pow((this.state.inj_I),1))-1)))})
    //         await this.setState({temps2: ((this.state.k/1.5)*(13.5/((Math.pow((this.state.inj_I1),1))-1)))})
    //         await this.setState({temps3: ((this.state.k/1.5)*(13.5/((Math.pow((this.state.inj_I2),1))-1)))})
    //     }
    //     calc_seuilIEIT = async() => {
    //         await this.setState({coef_I: this.state.second_I / this.state.prim_I})
    //         await this.setState({inj_I: (this.state.seuil_I * this.state.coef_I) * this.state.seuil_Ix1})
    //         await this.setState({inj_I1: (this.state.seuil_I * this.state.coef_I) * this.state.seuil_Ix2})
    //         await this.setState({inj_I2: (this.state.seuil_I * this.state.coef_I) * this.state.seuil_Ix3})
    //         await this.setState({temps1: ((this.state.k/0.808)*(80/((Math.pow((this.state.inj_I),2))-1)))})
    //         await this.setState({temps2: ((this.state.k/0.808)*(80/((Math.pow((this.state.inj_I1),2))-1)))})
    //         await this.setState({temps3: ((this.state.k/0.808)*(80/((Math.pow((this.state.inj_I2),2))-1)))})
    //     }
    //     calc_seuilU = async() => {
    //         await this.setState({coef_U: this.state.second_U / this.state.prim_U})
    //         await this.setState({inj_U: (this.state.seuil_U * this.state.coef_U)})
    //         await this.setState({inj_V: (this.state.seuil_V * this.state.coef_U) / 1.732 })
    //     }
    //     calc_Surch = async() => {
    //         await this.setState({Surch: math.log((math.pow((1),2)-(math.pow(1),2))/math.pow((1),2)-1)})
    //     }
    //     setPrim_I = (prim_I) => {
    //         this.setState({prim_I: prim_I})
    //     }
    //     setSecond_I = (second_I) => {
    //         this.setState({second_I: second_I})
    //     }
    //     setPrim_U = (prim_U) => {
    //         this.setState({prim_U: prim_U})
    //     }
    //     setSecond_U = (second_U) => {
    //         this.setState({second_U: second_U})
    //     }
    //     setSeuil_I = (seuil_I) => {
    //         this.setState({seuil_I: seuil_I})
    //     }
    //     setSeuil_U = (seuil_U) => {
    //         this.setState({seuil_U: seuil_U})
    //     }
    //     setSeuil_V = (seuil_V) => {
    //         this.setState({seuil_V: seuil_V})
    //     }
    //     setCurve = (curve) => {
    //         this.setState({curve: curve})
    //     }
    //     setk = (k) => {
    //         this.setState({k: k})
    //     }
    //     setSeuil_Ix1 = (seuil_Ix1) => {
    //         this.setState({seuil_Ix1: seuil_Ix1})
    //         console.log("setSeuil_I")
    //     }
    //     setSeuil_Ix2 = (seuil_Ix2) => {
    //         this.setState({seuil_Ix2: seuil_Ix2})
    //     }
    //     setSeuil_Ix3 = (seuil_Ix3) => {
    //         this.setState({seuil_Ix3: seuil_Ix3})
    //     }
    render() {
        // console.log({...this.state})
        return (
            <MainTabNavigator
                // screenProps = {{
                //     ...this.state,
                //     setPrim_I : this.setPrim_I,
                //     setSecond_I : this.setSecond_I,
                //     setPrim_U : this.setPrim_U,
                //     setSecond_U : this.setSecond_U,
                //     setSeuil_I : this.setSeuil_I,
                //     setSeuil_U : this.setSeuil_U,
                //     setSeuil_V : this.setSeuil_V,
                //     calc_coef : this.calc_coef,
                //     calc_seuilI : this.calc_seuilI,
                //     calc_seuilISIT : this.calc_seuilISIT,
                //     calc_seuilIVIT : this.calc_seuilIVIT,
                //     calc_seuilIEIT : this.calc_seuilIEIT,
                //     calc_seuilU : this.calc_seuilU,
                //     setCurve : this.setCurve,
                //     setk : this.setk,
                //     setSeuil_Ix1 : this.setSeuil_Ix1,
                //     setSeuil_Ix2 : this.setSeuil_Ix2,
                //     setSeuil_Ix3 : this.setSeuil_Ix3,
                // }}
            />
        )
    }
}
