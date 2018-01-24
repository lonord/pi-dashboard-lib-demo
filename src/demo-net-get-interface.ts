import getInterface from '@lonord/net-get-interface'

export default function run() {
	return getInterface().then((list) => {
		console.log('Got interface:')
		list.forEach((s) => console.log(`    ${s}`))
	}).catch((err) => console.error(err))
}
