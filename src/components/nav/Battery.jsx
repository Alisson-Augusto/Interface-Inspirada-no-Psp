import React from 'react';

async function battery_charging() {
    const battery = await navigator.getBattery();
    return battery.charging ? 'battery_charging_full' : 'battery_full';
}

class Battery extends React.Component {
    state = {
        bat_status: null
    }

    componentDidMount() {
        battery_charging().then(r => this.setState({bat_status: r}))
        setInterval(_ => {
            battery_charging().then(r => {
                this.setState({bat_status: r});
            })
        }, 1000)
    }

    render() {
        return <i className="material-icons md-18">{this.state.bat_status}</i>
    }
}

export default Battery;