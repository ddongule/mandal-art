import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
		font-family: inherit;
		font-size: initial;
		font-weight: 600;
		appearance: none;
		outline: none;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none !important;
	}

	html {
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-webkit-font-smoothing: antialiased;
		height: 100%;
	}

	body {
		padding: 0;
		margin: 0;
		font-family: 'PAYW Pro', 'PAYW Pro KR', -apple-system, BlinkMacSystemFont,
			'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		height: 100%;
		overscroll-behavior: contain;
		overflow-anchor: none;
		background-color: var(—foundation);
		color: var(—distinct);
		user-select: none;
	}
		
	input,
	textarea,
	button {
		font: inherit;
	}

	button {
		border: none;
		background: none;
		cursor: pointer;
	}

	a,
	a:visited {
		color: inherit;
		text-decoration: none;
	}
`;

export default GlobalStyle;
