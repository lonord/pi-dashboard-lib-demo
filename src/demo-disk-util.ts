import getDiskUsage from '@lonord/disk-util'

export default function run() {
	return getDiskUsage().then((list) => {
		console.log(`Got disk usage:`)
		console.log(JSON.stringify(list, null, 4))
	}).catch((err) => console.error(err))
}
