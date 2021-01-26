import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section, Menu } from "@quarkly/components";
import * as Components from "components";
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
		<Section height="100vh" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/Photo2.jpg?v=2021-01-25T00:03:55.645Z) 0% 0% /auto repeat scroll padding-box" padding="0px 0 6px 0" quarkly-title="HeroBlock">
			<Override
				slot="SectionContent"
				max-width="none"
				width="100%"
				justify-content="space-between"
				align-items="center"
				padding="0px 0px 8px 0px"
			/>
			<Stack margin="0px 0px 0px 0px" gap="0px" width="100%">
				{"    "}
				<StackItem width="40%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" padding="15px 0px 0px 30px" />
					{"        "}
					<Box display="flex" align-items="center">
						<Link href="#">
							<Image
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/vectorpaint.svg?v=2021-01-25T10:58:50.377Z"
								color="#ffffff"
								width="50px"
								height="50px"
								margin="3px 10px 3px 3px"
								padding="0px 0px 0px 0px"
							/>
						</Link>
						<Text font="normal 600 18px/50px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
							<Link href="#" color="#ffffff" text-decoration-line="initial">
								Вакансии в России
							</Link>
						</Text>
						<Text font="normal 300 14px/19px 'AvenirNextCyrRegular', sans-serif" margin="5px 0px 0px 12px" display="inline-block" color="#ffffff">
							<Link
								href="#"
								color="#ffffff"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Вакансії в Україні{" "}
							</Link>
						</Text>
						<Text font="normal 300 14px/19px 'AvenirNextCyrRegular', sans-serif" margin="5px 0px 0px 12px" display="inline-block" color="#ffffff">
							<Link
								href="#"
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
				<StackItem width="60%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/vectorpaint%20(1).svg?v=2021-01-25T11:01:19.138Z" margin="0px 0px 0px 0px" object-position="50% 49%" />
					<Box padding="0 14% 0 14%" margin="82px 0px 0px 0px">
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
			<Stack margin="0px 0px 0px 0px" max-width="825px" width="100%">
				{"    "}
				<StackItem width="25%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="#"
						text-decoration-line="initial"
						color="#ffd83a"
						font="--lead"
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
						font="--lead"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Санкт-Петербург{"\n\n"}
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
						font="--lead"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Ростов-на-Дону{"\n\n"}
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
						font="--lead"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Удаленная работа{"\n\n"}
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
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px">
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
			id="Header"
			quarkly-title="Header"
			padding="0px 0px 0px 0px"
			border-width="0px 0px 2px 0px"
			border-style="solid"
			border-color="#dbe6f4"
			transition="all 400ms ease 0s"
		>
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				<StackItem width="40%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" padding="15px 30px 13px 30px" />
					{"        "}
					<Box display="flex" align-items="center">
						<Link href="#">
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
							<Link href="#" color="#000000" text-decoration-line="initial">
								Вакансии в России
							</Link>
						</Text>
						<Text font="normal 300 14px/19px 'AvenirNextCyrRegular', sans-serif" margin="5px 0px 0px 12px" display="inline-block" color="#9BABBF">
							<Link
								href="#"
								color="#9BABBF"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Вакансії в Україні{" "}
							</Link>
						</Text>
						<Text font="normal 300 14px/19px 'AvenirNextCyrRegular', sans-serif" margin="5px 0px 0px 12px" display="inline-block" color="#9BABBF">
							<Link
								href="#"
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
				<StackItem width="60%" display="flex">
					<Override slot="StackItemContent" align-items="center" padding="15px 30px 13px 30px" justify-content="flex-end" />
					<Menu display="flex">
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
		<Section />
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