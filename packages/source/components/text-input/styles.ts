import { css } from '@emotion/react';
import { space } from '../../foundations/src';
import { height } from '../../foundations/src/size';
import { textSans } from '../../foundations/src/typography';
import { focusHalo } from '../../foundations/src/accessibility';
import { textInputDefault } from '../../foundations/src/themes';
import { resets } from '../../foundations/src/utils';

export const errorInput = ({ textInput } = textInputDefault) => css`
	border: 4px solid ${textInput.borderError};
	color: ${textInput.textError};
`;

export const successInput = ({ textInput } = textInputDefault) => css`
	border: 4px solid ${textInput.borderSuccess};
	color: ${textInput.textSuccess};
`;

export const textInput = (theme = textInputDefault) => {
	const { textInput } = theme;

	return css`
		${resets.input};
		box-sizing: border-box;
		height: ${height.inputMedium}px;
		${textSans.medium({ lineHeight: 'regular' })};
		color: ${textInput.textUserInput};
		background-color: ${textInput.backgroundInput};
		border: 2px solid ${textInput.border};
		padding: 0 ${space[2]}px;

		&:active {
			border: 2px solid ${textInput.borderActive};
		}

		&:focus {
			${focusHalo};
		}

		&:invalid {
			/*
			We automatically apply error styling to fields in an invalid state,
			but stop short of applying it to empty required fields.
			*/
			&[value]:not([value='']) {
				${errorInput(theme)};
			}
		}
	`;
};

export const widthFluid = css`
	width: 100%;
`;

export const width30 = css`
	width: 40ex;
	max-width: 100%; /* prevent overflow on narrow viewports */
`;

export const width10 = css`
	width: 18ex;
`;

export const width4 = css`
	width: 9ex;
`;