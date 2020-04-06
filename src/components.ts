namespace Components {
	export class Header {
		constructor() {
			const elem = document.createElement('div')
			elem.innerText = 'This is Header block'
			document.body.appendChild(elem)
		}
	}
	export class Content {
		constructor() {
			const elem = document.createElement('div')
			elem.innerText = 'This is Content block'
			document.body.appendChild(elem)
		}
	}
	export class Footer {
		constructor() {
			const elem = document.createElement('div')
			elem.innerText = 'This is Footer block'
			document.body.appendChild(elem)
		}
	}
}
