import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Span, Button, Strong, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section, Menu } from "@quarkly/components";
import * as Components from "components";
import { FaVk, FaFacebookF, FaTwitter, FaInstagram, FaOdnoklassniki } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.EmbedHTML />
		<Section
			height="100vh"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/Photo2.jpg?v=2021-01-25T00:03:55.645Z) center/cover no-repeat scroll padding-box"
			padding="0px 0 6px 0"
			quarkly-title="HeroBlock"
			lg-display="none"
		>
			<Override
				slot="SectionContent"
				max-width="none"
				width="100%"
				justify-content="space-between"
				align-items="center"
				padding="0px 0px 8px 0px"
				position="relative"
			/>
			<Stack margin="0px 0px 0px 0px" gap="0px" width="100%">
				{"    "}
				<StackItem width="45%" display="flex" nout-width="70%">
					<Override slot="StackItemContent" align-items="flex-start" padding="15px 0px 0px 30px" />
					{"        "}
					<Box display="flex" align-items="center">
						<Link href="/">
							<Image
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logowhite.svg?v=2021-01-26T19:12:20.383Z"
								color="#ffffff"
								width="50px"
								height="50px"
								margin="3px 10px 3px 3px"
								padding="0px 0px 0px 0px"
							/>
						</Link>
						<Text font="normal 500 18px/50px 'AvenirNextCyrMedium', sans-serif" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
							<Link href="https://ru.uteam.pro/" color="#ffffff" text-decoration-line="initial" font="500 18px/50px ">
								Вакансии в России
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 12px"
							display="inline-block"
							color="#ffffff"
							nout-display="none"
						>
							<Link
								href="http://ua.uteam.pro/"
								color="#ffffff"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Вакансії в Україні{" "}
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 12px"
							display="inline-block"
							color="#ffffff"
							nout-display="none"
						>
							<Link
								href="http://en.uteam.pro/"
								color="#ffffff"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Careers for Foreigners
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem width="40%" display="none" nout-width="20%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						padding="15px 0px 0px 30px"
						display="none"
						nout-display="block"
					/>
					{"        "}
				</StackItem>
				<StackItem width="55%" display="flex" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" nout-align-items="flex-end" />
					{"        "}
					<Image
						width="100%"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/vectorpaint%20(1).svg?v=2021-01-25T11:01:19.138Z"
						margin="-28px -2px 0px 0px"
						object-position="50% 49%"
						nout-width="70%"
						nout-margin="0px -2px 0px 0px"
					/>
					<Box
						padding="0 14% 0 14%"
						margin="40px 0px 0px 0px"
						nout-width="70%"
						nout-display="flex"
						nout-flex-direction="column"
						nout-align-items="flex-end"
						nout-justify-content="center"
					>
						<Text margin="0px 0px 17px 0px" color="#ffffff" font="--headline5" padding="0 0px 0 0px">
							и более сотрудников успешно работают и отдыхают с нами на протяжении тринадцати лет и не жалеют об этом
						</Text>
						<Text margin="0px 0px 10px 0px" color="#ffffff" font="--lead">
							Мы верим, что в мире есть масса возможностей заниматься тем, что по‑настоящему нравится, и точно знаем, что это можно делать у нас в компании.{" "}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Components.PopUp
				left="-30px"
				bottom="auto"
				right="auto"
				top="40%"
				transition="all 0.5s ease 0s"
			>
				<Override
					slot="button"
					color="#263238"
					font="normal 500 20px/1.5 'AvenirNextCyrMedium', sans-serif"
					letter-spacing=".1px"
					background="#ffe02d"
					padding="30px 55px 24px 66px"
					position="absolute"
					transition="all 0.5s ease 0s"
					left="-30px"
					bottom="auto"
					right="auto"
					top="40%"
					hover-left="0px"
				>
					<Box padding="0 0% 0 0%" display="flex" flex-direction="column" align-items="flex-start">
						Присоединяйся к нам!
						<Box padding="0 0% 0 0%" display="flex" align-items="center">
							<Text margin="0px 8px 0px 0px" font="500 16px/30px 'AvenirNextCyrMedium', sans-serif" letter-spacing=".5px">
								Отправить резюме
							</Text>
							<Image width="31px" height="12px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrowpop.svg?v=2021-01-26T22:37:32.256Z" />
						</Box>
					</Box>
				</Override>
			</Components.PopUp>
			<Stack margin="0px 0px 0px 0px" max-width="750px" width="100%" gap="16px">
				{"    "}
				<StackItem width="25%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Москва
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							1 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Санкт-Петербург
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							4 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Ростов-на-Дону
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							5 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Удаленная работа
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							3 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" nout-display="none">
				{"    "}
				<StackItem width="100%" display="flex">
					{"        "}
					<Link href="#header">
						<Image width="32px" height="53px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/vectorpaint%20(2).svg?v=2021-01-25T11:04:32.639Z" />
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			id="header"
			quarkly-title="Header"
			padding="0px 0px 0px 0px"
			border-width="0px 0px 2px 0px"
			border-style="solid"
			border-color="#dbe6f4"
			transition="all 400ms ease 0s"
			nout-border-radius="6px"
			lg-position="fixed"
		>
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				<StackItem
					width="50%"
					display="flex"
					nout-width="70%"
					lg-width="70%"
					sm-width="85%"
				>
					<Override slot="StackItemContent" align-items="flex-start" padding="15px 30px 13px 30px" />
					{"        "}
					<Box display="flex" align-items="center">
						<Link href="/">
							<Image
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z"
								color="#ffffff"
								width="50px"
								height="50px"
								margin="3px 10px 3px 3px"
								padding="0px 0px 0px 0px"
							/>
						</Link>
						<Text font="normal 600 18px/50px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
							<Link href="https://ru.uteam.pro/" color="#000000" text-decoration-line="initial" font="500 18px/50px AvenirNextCyrRegular, sans-serif">
								Вакансии в России
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 12px"
							display="inline-block"
							color="#9BABBF"
							nout-display="none"
						>
							<Link
								href="http://ua.uteam.pro/"
								color="#9BABBF"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Вакансії в Україні{" "}
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 12px"
							display="inline-block"
							color="#9BABBF"
							nout-display="none"
						>
							<Link
								href="http://en.uteam.pro/"
								color="#9BABBF"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Careers for Foreigners
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					nout-width="30%"
					lg-width="30%"
					sm-width="15%"
				>
					<Override slot="StackItemContent" align-items="center" padding="15px 30px 13px 30px" justify-content="flex-end" />
					<Components.MobileSide
						flex="1 0 auto"
						nout-position="relative"
						nout-z-index="5"
						nout-display="flex"
						nout-justify-content="flex-end"
						nout-align-items="center"
						display="none"
						nout-top="0px"
					>
						<Override
							slot="Content"
							display="flex"
							align-items="center"
							nout-position="fixed"
							nout-top={0}
							nout-left={0}
							nout-z-index="1"
							nout-width="100%"
							nout-height="100%"
							nout-background="white"
							nout-flex-direction="column"
						/>
						<Override
							slot="Button"
							display="none"
							nout-display="flex"
							nout-width="33px"
							nout-height="28px"
							nout-z-index="6"
							nout-top="35px"
							sm-margin="-3px 0px 0px 0px"
						/>
						<Override
							slot="Button Line"
							nout-background="black"
							nout-min-height="3px"
							border-radius="6px"
							nout-position="absolute"
						/>
						<Override
							slot="Button Line1"
							nout-top="4px"
							border-radius="6px"
							nout-width="22px"
							nout-right="0px"
						/>
						<Override slot="Button Line2" nout-top="11px" nout-border-radius="6px" nout-right="0px" />
						<Override slot="Button Line3" nout-top="18px" nout-border-radius="6px" nout-right="0px" />
						<Override slot="Button Line1 :closed" nout-width="22px" />
						<Override slot="Button Line2 :closed" nout-width="22px" />
						<Override slot="Button Line3 :closed" nout-width="22px" />
						<Override slot="Button Line2 :open" nout-opacity="0" nout-width="32px" />
						<Override slot="Button Line1 :open" nout-width="36px" nout-transform="translateY(12px) rotate(225deg)" />
						<Override slot="Button Line3 :open" nout-width="36px" nout-transform="translateY(-12px) rotate(135deg)" />
						<Override slot="Content :closed" nout-opacity="0" nout-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-transform="translateY(-100%)" />
						<Override slot="Content :open" nout-transform="translateY(0%)" nout-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-opacity="1" />
						<Override slot="Button :open" nout-position="fixed" />
						<Text
							flex="0 0 auto"
							margin="0px 0px 0px 0px"
							font="--headline3"
							nout-z-index="6"
							display="none"
							nout-display="block"
							nout-width="90%"
							nout-margin="24px 0px 24px 0px"
						>
							Sitename
						</Text>
						<Menu
							flex="1 1 auto"
							display="flex"
							align-items="center"
							justify-content="center"
							nout-flex="0 1 auto"
							nout-flex-direction="column"
						>
							<Override slot="item-404" display="none" />
							<Override slot="item-index" display="none" />
						</Menu>
						<Button flex="0 0 auto" margin="0px 0px 0px 16px" nout-margin="0px 0px 0px 0px">
							Button
						</Button>
					</Components.MobileSide>
					<Menu display="flex" nout-display="none">
						<Override slot="item-404" display="none" />
						<Override slot="link-index" text-decoration-line="initial">
							Главная
						</Override>
						<Override slot="item-active" color="#4a8cfa" />
						<Override slot="link-active" color="#4a8cfa" />
						<Override
							slot="link"
							transition="color 0.3s ease-in-out 0s"
							font="400 16px/24px 'AvenirNextCyrMedium'"
							text-decoration-line="initial"
							color="#263238"
							hover-color="#4a8cfa"
						/>
					</Menu>
					{"        "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="60px 0 100px 0" sm-padding="110px 0 60px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="--headline3"
						margin="0px 0px 70px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
					>
						Работай с комфортом!
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon1.svg?v=2021-01-26T15:44:54.779Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 70px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						sm-margin="23px 0px 20px 0px"
					>
						Гибкий график
						<br />
						работы
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon1.svg?v=2021-01-26T15:44:54.779Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 70px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						sm-margin="23px 0px 20px 0px"
					>
						Профессиональное
						<br />
						развитие и
						<br />
						обучение
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon1.svg?v=2021-01-26T15:44:54.779Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 70px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						sm-margin="23px 0px 20px 0px"
					>
						Социальные
						<br />
						гарантии, ДМС
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon1.svg?v=2021-01-26T15:44:54.779Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Совместный отдых
						<br />
						и корпоративные
						<br />
						мероприятия
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon1.svg?v=2021-01-26T15:44:54.779Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Комфортные
						<br />
						условия работы
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon1.svg?v=2021-01-26T15:44:54.779Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Бесплатное питание
						<br />
						в офисе
						<br />
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="24px 0 38px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/Photo2.jpg?v=2021-01-25T00:03:55.645Z) center/cover no-repeat fixed padding-box">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" max-width="750px" gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" color="#ffffff" />
					{"        "}
					<Text font="--headline3" margin="0px 0px 0px -3px" display="inline-block" text-align="left">
						Вакансии
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" max-width="750px" width="100%" gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="25%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Москва
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							1 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Санкт-Петербург
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							4 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Ростов-на-Дону
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							5 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Удаленная работа
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							3 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 80px 0" sm-padding="30px 0 40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="975px" width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text font="--headline3" margin="0px 0px 40px 0px" display="inline-block">
						Команда uTeam
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="25%" display="flex" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/laurel.svg?v=2021-01-26T17:35:48.102Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Лауреат
						<br />
						«Премии Рунета»
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/laurel.svg?v=2021-01-26T17:35:48.102Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Лучший
						<br />
						корпоративный сайт
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/laurel.svg?v=2021-01-26T17:35:48.102Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						III место
						<br />
						в «Народной десятке»
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/laurel.svg?v=2021-01-26T17:35:48.102Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Победитель
						<br />
						Open Web Awards
						<br />
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Stack margin="10px 0px 0px 0px" max-width="975px" width="100%">
				{"        "}
				<StackItem width="33.33%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						<Strong font="normal bold 48px/42px 'AvenirNextCyrRegular', sans-serif" color="#4a8cfa">
							12
						</Strong>
						<br />
					</Text>
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						лет стабильной
						<br />
						работы крупнейшего
						<br />
						сервиса Рунета
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						<Strong
							font="normal bold 48px/42px 'AvenirNextCyrRegular', sans-serif"
							color="#4a8cfa"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							165+
						</Strong>
						{" "}
						<br />
					</Text>
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						молодых
						<br />
						и целеустремленных
						<br />
						сотрудников
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						<Strong
							font="normal bold 48px/42px 'AvenirNextCyrRegular', sans-serif"
							color="#4a8cfa"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							6
						</Strong>
						{" "}
						<br />
					</Text>
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						комфортных офисов
						<br />
						в 4-х городах
						<br />
						России и Украины
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Link
						href="#"
						text-align="center"
						text-decoration-line="initial"
						color="#ffffff"
						background="#4a8cfa"
						padding="14px 15px 15px 15px"
						font="600 16px 'AvenirNextCyrRegular', sans-serif"
						border-radius="5px"
						transition="all 0.2s linear 0s"
						margin="40px 0px 0px 0px"
						hover-background="#437de0"
					>
						Как попасть в команду
					</Link>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			quarkly-title="Footer"
			padding="0px 0px 0px 0px"
			border-width="2px 0px 0px 0px"
			border-style="solid"
			border-color="#dbe6f4"
			transition="all 400ms ease 0s"
			lg-padding="10px 0px 10px 0px"
		>
			<Override slot="SectionContent" max-width="1170px" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				<StackItem width="70%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" align-items="flex-end" padding="13px 30px 14px 30px" />
					{"        "}
					<Box display="flex" align-items="center" lg-flex-direction="column" lg-width="100%">
						<Link href="/">
							<Image
								src="https://screenshot.ukit.com/src/goalov/21/2021-01-27-03-36-00.png"
								color="#ffffff"
								width="121px"
								height="40px"
								margin="3px 10px 3px 3px"
								padding="0px 0px 0px 0px"
							/>
						</Link>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 22px"
						>
							<Link
								href="https://blog.ucoz.ru/"
								color="#AEC1D9"
								text-decoration-line="initial"
								hover-color="#4a8cfa"
								transition="color 0.2s ease 0s"
								font="400 14px/19px 'AvenirNextCyrMedium'"
								target="_blank"
								lg-padding="0px 0px 0px 0px"
								lg-margin="0px 0px 0px 0px"
							>
								Блог компании
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 22px"
						>
							<Link
								href="http://www.ucoz.ru/all/"
								color="#AEC1D9"
								text-decoration-line="initial"
								hover-color="#4a8cfa"
								transition="color 0.2s ease 0s"
								font="400 14px/19px 'AvenirNextCyrMedium'"
								target="_blank"
								lg-padding="0px 0px 0px 0px"
								lg-margin="0px 0px 0px 0px"
							>
								Наши проекты
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 22px"
						>
							<Link
								href="http://ua.uteam.pro/"
								color="#4a8cfa"
								text-decoration-line="initial"
								hover-color="#3d72cc"
								transition="color 0.2s ease 0s"
								font="300 14px/19px 'AvenirNextCyrMedium'"
								lg-padding="0px 0px 0px 0px"
								lg-margin="0px 0px 0px 0px"
							>
								Вакансії в Україні{" "}
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 22px"
						>
							<Link
								href="http://en.uteam.pro/"
								color="#4a8cfa"
								text-decoration-line="initial"
								hover-color="#3d72cc"
								transition="color 0.2s ease 0s"
								font="300 14px/19px 'AvenirNextCyrMedium'"
								lg-padding="0px 0px 0px 0px"
								lg-margin="0px 0px 0px 0px"
							>
								Careers for Foreigners
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem width="30%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						padding="13px 30px 14px 30px"
						justify-content="flex-end"
						lg-justify-content="center"
					/>
					<Link href="https://www.facebook.com/ucoz" target="_blank" margin="0px 15px 0px 0px" border-color="#AFC1D8">
						<Icon
							category="fa"
							icon={FaVk}
							hover-color="#ffffff"
							color="#AFC1D8"
							border-style="solid"
							border-color="#AFC1D8"
							border-width="2px"
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							hover-border-color="#4a8cfa"
							hover-background="#4a8cfa"
							background="#ffffff"
							size="20px"
						/>
					</Link>
					<Link href="https://www.facebook.com/ucoz" target="_blank" margin="0px 15px 0px 0px" border-color="#AFC1D8">
						<Icon
							category="fa"
							icon={FaFacebookF}
							hover-color="#ffffff"
							color="#AFC1D8"
							border-style="solid"
							border-color="#AFC1D8"
							border-width="2px"
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							hover-border-color="#4a8cfa"
							hover-background="#4a8cfa"
							background="#ffffff"
							size="20px"
						/>
					</Link>
					<Link href="https://twitter.com/ucoz_ru" target="_blank" margin="0px 15px 0px 0px" border-color="#AFC1D8">
						<Icon
							category="fa"
							icon={FaTwitter}
							hover-color="#ffffff"
							color="#AFC1D8"
							border-style="solid"
							border-color="#AFC1D8"
							border-width="2px"
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							hover-border-color="#4a8cfa"
							hover-background="#4a8cfa"
							background="#ffffff"
							size="20px"
						/>
					</Link>
					<Link href="https://instagram.com/ucoz_ru" target="_blank" margin="0px 15px 0px 0px" border-color="#AFC1D8">
						<Icon
							category="fa"
							icon={FaInstagram}
							hover-color="#ffffff"
							color="#AFC1D8"
							border-style="solid"
							border-color="#AFC1D8"
							border-width="2px"
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							hover-border-color="#4a8cfa"
							hover-background="#4a8cfa"
							background="#ffffff"
							size="20px"
						/>
					</Link>
					<Link href="http://ok.ru/ucozru" target="_blank" margin="0px 15px 0px 0px" border-color="#AFC1D8">
						<Icon
							category="fa"
							icon={FaOdnoklassniki}
							hover-color="#ffffff"
							color="#AFC1D8"
							border-style="solid"
							border-color="#AFC1D8"
							border-width="2px"
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							hover-border-color="#4a8cfa"
							hover-background="#4a8cfa"
							background="#ffffff"
							size="20px"
						/>
					</Link>
					{"        "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});