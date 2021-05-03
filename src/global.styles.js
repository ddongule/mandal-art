import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	:root {
		--gray: #cacaca;
		--white: #ffffff;
		--black: #000000;
		--orange: #ff9f09;
		--white-rgb: 0,0,0;
		--purple: #5e53ff;
		--red: #ff5353;
		--red-opacity: #ff5353c8;
		--background: hsla(0,0%,40%,0.56863);
	}

	* {
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
		scroll-behavior: smooth;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-webkit-font-smoothing: antialiased;
		height: 100%;
	}

	body {
		padding: 0;
		min-width: 60rem;
		margin: 0;
		font-family: 'PAYW Pro', 'PAYW Pro KR', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;
		height: 100%;
		overscroll-behavior: contain;
		overflow-anchor: none;
		user-select: none;
		background: var(--black);
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

	.App {
		overflow: hidden;
	}

	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1.5rem;
	}

	.example-image {
    position: absolute;
		width: 90%;
	}
`;

export default GlobalStyle;
