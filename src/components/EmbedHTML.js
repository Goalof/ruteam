import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<style>
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
  src: url('https://ukit.top/fonts/AvenirNextCyr-Regular.eot');
  src: url('https://ukit.top/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('https://ukit.top/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('https://ukit.top/fonts/AvenirNextCyr-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNextCyrMedium';
  src: url('https://ukit.top/fonts/AvenirNextCyr-Medium.eot');
  src: url('https://ukit.top/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('https://ukit.top/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('https://ukit.top/fonts/AvenirNextCyr-Medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNextCyrBold';
  src: url('https://ukit.top/fonts/AvenirNextCyr-Bold.eot');
  src: url('https://ukit.top/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('https://ukit.top/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('https://ukit.top/fonts/AvenirNextCyr-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNextCyrDemi';
  src: url('https://ukit.top/fonts/AvenirNextCyr-Demi.otf');
  font-weight: normal;
  font-style: normal;
}
body {
  font-family: 'AvenirNextCyrRegular', sans-serif !important;
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