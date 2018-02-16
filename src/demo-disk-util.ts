import { getDiskUsage, IOStatWatcher, watchIOStat } from '@lonord/disk-util'

export default function run() {
	return getDiskUsage().then((list) => {
		console.log(`Got disk usage:`)
		console.log(JSON.stringify(list, null, 4))
	}).then(() => {
		console.log(`Got disk iostat:`)
		return new Promise((resolve, reject) => {
			let t = 0
			const watcher = watchIOStat(1000, (stats) => {
				t++
				console.log(JSON.stringify(stats, null, 4))
				if (t > 3) {
					watcher.stop()
					resolve()
				}
			}, reject)
		})
	}).catch((err) => console.error(err))
}
