import { breakpoints } from "@guardian/src-foundations"

// This is duplicated from src-foundations.
// We should find a better way of sharing
// types across packages
export type Breakpoint =
	| "mobileMedium"
	| "mobileLandscape"
	| "phablet"
	| "tablet"
	| "desktop"
	| "leftCol"
	| "wide"

type BreakpointMap = {
	[key in Breakpoint]: string
}

const minWidth = (from: number): string => `@media (min-width: ${`${from}px`})`

const maxWidth = (until: number): string =>
	`@media (max-width: ${`${until - 1}px`})`

const minWidthMaxWidth = (from: number, until: number): string =>
	`@media (min-width: ${`${from}px`}) and (max-width: ${`${until - 1}px`})`

// e.g. from.*
const from: BreakpointMap = {
	mobileMedium: minWidth(breakpoints.mobileMedium),
	mobileLandscape: minWidth(breakpoints.mobileLandscape),
	phablet: minWidth(breakpoints.phablet),
	tablet: minWidth(breakpoints.tablet),
	desktop: minWidth(breakpoints.desktop),
	leftCol: minWidth(breakpoints.leftCol),
	wide: minWidth(breakpoints.wide),
}

// e.g. until.*
const until: BreakpointMap = {
	mobileMedium: maxWidth(breakpoints.mobileMedium),
	mobileLandscape: maxWidth(breakpoints.mobileLandscape),
	phablet: maxWidth(breakpoints.phablet),
	tablet: maxWidth(breakpoints.tablet),
	desktop: maxWidth(breakpoints.desktop),
	leftCol: maxWidth(breakpoints.leftCol),
	wide: maxWidth(breakpoints.wide),
}

// e.g. between.*.and.*
const between = {
	mobileMedium: {
		and: {
			mobileLandscape: minWidthMaxWidth(
				breakpoints.mobileMedium,
				breakpoints.mobileLandscape,
			),
			phablet: minWidthMaxWidth(
				breakpoints.mobileMedium,
				breakpoints.phablet,
			),
			tablet: minWidthMaxWidth(
				breakpoints.mobileMedium,
				breakpoints.tablet,
			),
			desktop: minWidthMaxWidth(
				breakpoints.mobileMedium,
				breakpoints.desktop,
			),
			leftCol: minWidthMaxWidth(
				breakpoints.mobileMedium,
				breakpoints.leftCol,
			),
			wide: minWidthMaxWidth(breakpoints.mobileMedium, breakpoints.wide),
		},
	},
	mobileLandscape: {
		and: {
			phablet: minWidthMaxWidth(
				breakpoints.mobileLandscape,
				breakpoints.phablet,
			),
			tablet: minWidthMaxWidth(
				breakpoints.mobileLandscape,
				breakpoints.tablet,
			),
			desktop: minWidthMaxWidth(
				breakpoints.mobileLandscape,
				breakpoints.desktop,
			),
			leftCol: minWidthMaxWidth(
				breakpoints.mobileLandscape,
				breakpoints.leftCol,
			),
			wide: minWidthMaxWidth(
				breakpoints.mobileLandscape,
				breakpoints.wide,
			),
		},
	},
	phablet: {
		and: {
			tablet: minWidthMaxWidth(breakpoints.phablet, breakpoints.tablet),
			desktop: minWidthMaxWidth(breakpoints.phablet, breakpoints.desktop),
			leftCol: minWidthMaxWidth(breakpoints.phablet, breakpoints.leftCol),
			wide: minWidthMaxWidth(breakpoints.phablet, breakpoints.wide),
		},
	},
	tablet: {
		and: {
			desktop: minWidthMaxWidth(breakpoints.tablet, breakpoints.desktop),
			leftCol: minWidthMaxWidth(breakpoints.tablet, breakpoints.leftCol),
			wide: minWidthMaxWidth(breakpoints.tablet, breakpoints.wide),
		},
	},
	desktop: {
		and: {
			leftCol: minWidthMaxWidth(breakpoints.desktop, breakpoints.leftCol),
			wide: minWidthMaxWidth(breakpoints.desktop, breakpoints.wide),
		},
	},
	leftCol: {
		and: {
			wide: minWidthMaxWidth(breakpoints.leftCol, breakpoints.wide),
		},
	},
}

export { from, until, between, breakpoints, Breakpoint }
