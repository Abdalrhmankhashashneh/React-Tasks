import { useContext } from "react";
import { context } from "../routes";
import { Component } from "react";
import { getValue } from "@testing-library/user-event/dist/utils";
export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <context.Consumer>
                {({ state, setAbood }) => {
                    setAbood();
                    return state.abood
                }}
            </context.Consumer>
        );
    }
}