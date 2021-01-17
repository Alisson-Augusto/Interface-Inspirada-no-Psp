import React from 'react';

const stringHora = d => {
    // Transforma Date em String no padrão H:M(AM/PM)
    const isPm = d.getHours() > 12;
    const hour = isPm ? d.getHours() - 12 : d.getHours();
    const minutes = d.getMinutes();

    return `${hour}:${minutes}${isPm ? 'PM': 'AM'}`;
}

class Clock extends React.Component{
    state = {
        display: stringHora(new Date())
    }

    componentDidMount() {
        let d;
        setInterval(_ => {
            d = stringHora(new Date());
            this.setState({display: d});
        }, 1000);
    }

    render() {
        return (
            <span>{this.state.display}</span>
        )
    }
}

export default Clock;