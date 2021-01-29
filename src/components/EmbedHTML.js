import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<style>
.example-1 input[type=file]{outline:0;opacity:0;pointer-events:none;user-select:none}
.example-1 .label{border:2px dashed #c5cfdb;border-radius:5px;display:block;padding:1.2em;transition:border 300ms ease;cursor:pointer;text-align:center}
.example-1 .label i{display:block;font-size:42px;}


.no-user-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
* {
  -webkit-tap-highlight-color: transparent!important;
}
@font-face {
  font-family: 'AvenirNextCyrRegular';
  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot');
  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNextCyrMedium';
  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot');
  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNextCyrBold';
  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot');
  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNextCyrDemi';
  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Demi.otf');
  font-weight: normal;
  font-style: normal;
}
body {
  font-family: 'AvenirNextCyrRegular', sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>


`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});