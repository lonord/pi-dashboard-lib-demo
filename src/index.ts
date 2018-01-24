import netGetInterface from './demo-net-get-interface'
import netTrafficMonitor from './demo-net-traffic-monitor'

const run = async () => {
	await netGetInterface()
	await netTrafficMonitor()
}

run()
