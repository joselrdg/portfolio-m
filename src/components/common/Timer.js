import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        if (this.state.seconds <= 16) {
            this.setState(prevState => ({
                seconds: prevState.seconds + 1
            }));
        } else {
            this.setState({
                seconds: 0
            });
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                {this.state.seconds}
            </>
        );
    }
}

export default Timer