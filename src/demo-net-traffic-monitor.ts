import {
	getCurrentTrafficSpeed, TrafficSpeed, TrafficSpeedWatcher, watchTrafficSpeed
} from '@lonord/net-traffic-monitor'

export default function run() {
	return getCurrentTrafficSpeed('br-lan').then((result) => {
		console.log('Get current speed:')
		console.log(JSON.stringify(result, null, 4))
	}).then(() => {
		return new Promise((resolve, reject) => {
			let watcher: TrafficSpeedWatcher
			let count = 0
			const onReport = (speed: TrafficSpeed) => {
				count++
				console.log(`On report speed ${count}:`)
				console.log(JSON.stringify(speed, null, 4))
				if (count >= 3 && watcher) {
					watcher.stop()
					resolve()
				}
			}
			const onError = (err: any) => {
				reject()
			}
			watchTrafficSpeed('br-lan', 3000, onReport).then((w) => watcher = w).catch(() => reject())
		})
	})
}
