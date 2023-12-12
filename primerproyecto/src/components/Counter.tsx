import React from "react";

type CounterProps = {};
type CounterState = { cont: number }

class Counter extends React.Component<CounterProps, CounterState> {

    constructor(props: CounterProps) {
        super(props);
        this.state = {
            cont: 0
        }
    }

    componentDidMount(): void {
        setInterval(() => {
            this.setState({ cont: this.state.cont + 1 });
        }, 1000);
    }

    render() {
        return <div className="counter">
            <p>{this.state.cont}</p>
        </div>;
    }

}

export default Counter;