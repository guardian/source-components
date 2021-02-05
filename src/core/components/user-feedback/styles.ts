import { css } from '@emotion/react';
import { userFeedbackDefault } from '@guardian/src-foundations/themes';
import { textSans } from '@guardian/src-foundations/typography';
import { remWidth, remHeight } from '@guardian/src-foundations/size';

const inlineMessage = css`
	display: flex;
	align-items: flex-start;
	${textSans.medium({ lineHeight: 'regular' })};

	svg {
		fill: currentColor;
		/* we don't want the SVG to change size depending on available space */
		flex: none;
		width: ${remWidth.iconMedium}rem;
		height: ${remHeight.iconMedium}rem;

		/*
		a visual kick to vertically align the icon with the top row of text
		and horizontally pull it to the beginning of the row
		 */
		transform: translate(-4px, -3px);
	}
`;

export const inlineError = ({ userFeedback } = userFeedbackDefault) => css`
	${inlineMessage};
	color: ${userFeedback.textError};
`;

export const inlineSuccess = ({ userFeedback } = userFeedbackDefault) => css`
	${inlineMessage};
	color: ${userFeedback.textSuccess};
`;
