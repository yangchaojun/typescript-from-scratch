// declare var $: (param: () => void) => void

declare function $(
	selector: string
): {
	html: (node: string) => {}
}
declare function $(readyFunc: () => void): void
