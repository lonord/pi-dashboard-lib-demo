import diskUsage from './demo-disk-util'
import netGetInterface from './demo-net-get-interface'
import netTrafficMonitor from './demo-net-traffic-monitor'

const run = async () => {
	await netGetInterface()
	await netTrafficMonitor()
	await diskUsage()
}

run()
