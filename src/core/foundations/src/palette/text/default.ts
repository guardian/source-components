import { neutral, error as _error, success as _success, brand } from "../global"

export const text = {
	primary: neutral[7],
	secondary: neutral[46], //TODO: deprecate in v0.16
	supporting: neutral[46],
	success: _success[400],
	error: _error[400],
	ctaPrimary: neutral[100],
	ctaSecondary: brand[400],
	anchorPrimary: brand[500],
	anchorSecondary: neutral[7],
	userInput: neutral[7],
	inputLabel: neutral[7],
	inputLabelSupporting: neutral[46],
	inputChecked: brand[400], //choice card only
	inputHover: brand[400], //choice card only
	groupLabel: neutral[7],
	groupLabelSupporting: neutral[46],
}
