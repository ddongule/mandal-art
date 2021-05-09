import { createGlobalStyle } from 'styled-components';

import PaywProBold from './assets/fonts/otf/PAYW-Pro-Bold.otf';
import PaywProExtraLight from './assets/fonts/otf/PAYW-Pro-ExtraLight.otf';
import PaywProLight from './assets/fonts/otf/PAYW-Pro-Light.otf';
import PaywProMedium from './assets/fonts/otf/PAYW-Pro-Medium.otf';
import PaywProRegular from './assets/fonts/otf/PAYW-Pro-Regular.otf';
import PaywProSemiBold from './assets/fonts/otf/PAYW-Pro-SemiBold.otf';
import PaywProThin from './assets/fonts/otf/PAYW-Pro-Thin.otf';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'PAYW Pro Bold';
		src: url(${PaywProBold}) format('woff');
		font-style: normal;
	}
	@font-face {
		font-family: 'PAYW Pro';
		src: url(${PaywProLight}) format('woff');
		font-style: normal;
	}
	@font-face {
		font-family: 'PAYW Pro Medium';
		src: url(${PaywProMedium}) format('woff');
		font-style: normal;
	}
	@font-face {
		font-family: 'PAYW-Pro';
		src: url(${PaywProRegular}) format('woff');
		font-style: normal;
	}
	@font-face {
		font-family: 'PAYW Pro SemiBold';
		src: url(${PaywProSemiBold}) format('woff');
		font-style: normal;
	}

	:root {
		--gray: #cacaca;
		--white: #ffffff;
		--black: #000000;
		--orange: #ff9922;
		--yellow: #ffcf26;
		--baemint: #42ffef;
		--white-rgb: 0,0,0;
		--purple: #5e53ff;
		--red: #ff5353;
		--red-opacity: #ff5353c8;
		--red-opacity-big: #ff53537a;
		--box-background: #ffffff2e;
		--placeholder: #656565;
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
	button {
		font: inherit;
	}
	
	textarea {
		/* resize: none; */
		
		&::placeholder{
			vertical-align: middle;
		}
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

	[contenteditable] {
		-webkit-user-modify: read-write-plaintext-only;
	}

	.App {
		overflow: hidden;
	}

	.example {
    position: absolute;
		width: 90%;
	}

	@keyframes upDown {
		0% {
			margin-top: 0px;
		}
		100% {
			margin-top: 1rem;
		}
	}
`;

export default GlobalStyle;
