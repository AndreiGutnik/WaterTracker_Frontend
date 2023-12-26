import { createGlobalStyle } from 'styled-components';
import { baseTheme } from './theme';
import 'modern-normalize';

export function fontFace(name, src, fontWeight, fontStyle = 'normal') {
  return `
    @font-face{
        font-family: "${name}";
        src: url('../src/fonts/'${src}'.ttf' format('truetype'));
        font-weight: ${fontWeight};
				font-style: ${fontStyle};
    }
`;
}

export const GlobalStyle = createGlobalStyle`
	${fontFace('RobotoRegular', 'Roboto-Regular', 400)}
	${fontFace('RobotoMedium', 'Roboto-Medium', 500)}
	${fontFace('RobotoBold', 'Roboto-Bold', 700)}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
  margin: 0;
  background-color: ${baseTheme.colors.white};
  color: ${baseTheme.colors.black};
  font-family: 'RobotoRegular', sans-serif;
	}

	code {
		font-family: 'RobotoRegular', sans-serif;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin-top: 0;
		margin-bottom: 0;
	}

	h1, h2 {
		text-align: center;
	}

	ul {
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
		text-decoration: none;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	input,
	button,
	label {
		display: block;
	}
`;
