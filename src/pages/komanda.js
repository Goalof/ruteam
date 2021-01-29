import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { FaVk, FaFacebookF, FaTwitter, FaInstagram, FaOdnoklassniki } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"komanda"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.EmbedHTML />
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
			position="fixed"
			background="#ffffff"
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
					<Override slot="StackItemContent" align-items="flex-start" padding="13px 30px 13px 30px" />
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
							<Link href="https://ru.uteam.pro/" color="#000000" text-decoration-line="initial" font="500 18px/50px 'AvenirNextCyrMedium', sans-serif">
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
						<Box
							nout-width="100%"
							nout-display="flex"
							nout-align-items="center"
							nout-padding="0px 0px 0px 0px"
							nout-margin="0px 0px 0px 33px"
						>
							<Image
								width="64px"
								height="64px"
								nout-width="50px"
								nout-height="50px"
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z"
							/>
							<Text
								flex="0 0 auto"
								margin="0px 0px 0px 0px"
								font="--headline3"
								nout-z-index="6"
								display="none"
								nout-display="block"
								nout-width="90%"
								nout-margin="24px 0px 24px 12px"
								nout-font="normal 500 18px/42px 'AvenirNextCyrMedium', sans-serif"
							>
								Вакансии в России
							</Text>
						</Box>
						<Menu
							flex="1 1 auto"
							display="flex"
							align-items="center"
							justify-content="center"
							nout-flex="0 1 auto"
							nout-flex-direction="column"
							nout-padding="6px 6px 0px 6px"
							nout-margin="15px 0px 0px 0px"
						>
							<Override slot="item-404" display="none" />
							<Override slot="item-index" display="none" nout-display="block" />
							<Override
								slot="link"
								nout-text-decoration-line="initial"
								nout-font="18px AvenirNextCyrRegular, sans-serif"
								nout-letter-spacing=".2px"
								nout-padding="0px 0px 0px 0px"
								nout-color="#263238"
							/>
							<Override slot="item" nout-padding="15px 25px 15px 25px" />
							<Override slot="link-index">
								Главная
							</Override>
						</Menu>
						<StackItem width="70%" display="flex" lg-width="100%" nout-width="100%">
							<Override
								slot="StackItemContent"
								align-items="flex-end"
								padding="13px 30px 14px 30px"
								nout-flex-direction="column"
								nout-justify-content="center"
								nout-align-items="center"
								nout-padding="0px 30px 0px 30px"
							/>
							{"        "}
							<Text
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
								nout-padding="15px 25px 15px 25px"
								nout-margin="0px 0px 0px 0px"
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
									nout-font="18px AvenirNextCyrRegular, sans-serif"
									nout-padding="0px 0px 0px 0px"
								>
									Careers for Foreigners
								</Link>
							</Text>
							<Text
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
								nout-margin="0px 0px 0px 0px"
								nout-padding="15px 25px 15px 25px"
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
									nout-font="18px AvenirNextCyrRegular, sans-serif"
								>
									Вакансії в Україні{" "}
								</Link>
							</Text>
						</StackItem>
						<StackItem width="30%" display="flex" lg-width="100%" nout-width="100%">
							<Override
								slot="StackItemContent"
								align-items="center"
								padding="13px 30px 14px 30px"
								justify-content="flex-end"
								lg-justify-content="center"
								nout-justify-content="center"
								nout-margin="10px 0px 0px 0px"
							/>
							<Link
								href="https://www.facebook.com/ucoz"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaVk}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://www.facebook.com/ucoz"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaFacebookF}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://twitter.com/ucoz_ru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaTwitter}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://instagram.com/ucoz_ru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaInstagram}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="http://ok.ru/ucozru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
								nout-margin="0px 0px 0px 0px"
							>
								<Icon
									category="fa"
									icon={FaOdnoklassniki}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							{"        "}
						</StackItem>
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
		<Section padding="120px 0 100px 0" sm-padding="110px 0 60px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#263238"
					>
						Команда
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 10px 5px 10px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						letter-spacing="0.3px"
					>
						Мы гордимся не только теми сервисами, которые мы делаем для вас каждый день, но и тем, что умеем превращать профессионалов своего дела в настоящих друзей и членов одной семьи. Посмотрите, как мы живем, — возможно, именно в этой атмосфере и среди этих людей вы окажетесь очень скоро.
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Components.Slider width="100%" slides="http://ru.uteam.pro/img/members/new_ourteam_page/24.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/23.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/20.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/19.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/18.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/17.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/16.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/15.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/14.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/13.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/12.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/10.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/09.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/08.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/07.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/06.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/05.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/04.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/03.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/02.jpg">
						<Override slot="Slide Description">
							Slide 1 text
						</Override>
						<Override slot="Slide 1 Description">
							First Slide
						</Override>
						<Override slot="Slide 2 Description">
							Second Slide
						</Override>
					</Components.Slider>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="50px 0px 0px 0px" max-width="1170px">
				{"    "}
				<StackItem width="40%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Text
						font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
						margin="0px 0px 18px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						letter-spacing="0.3px"
						color="#3D72CC"
					>
						17 сотрудников
						<br />
						{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						letter-spacing="0.3px"
						color="#9BABBF"
					>
						В московском офисе компании находится руководство, команды продуктологов, маркетинга, PR и бухгалтерия.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="center" flex-direction="column" />
					{"        "}
					<Image
						width="90px"
						height="90px"
						margin="0px 0px 24px 0px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13:05:31.217Z"
						border-radius="100%"
					/>
					<Text
						font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 12px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						letter-spacing="0.3px"
						color="#3D72CC"
					>
						Евгений Курт{"\n\n"}
					</Text>
					<Text
						font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						letter-spacing="0.3px"
						color="#9BABBF"
					>
						CEO{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="center" flex-direction="column" />
					{"        "}
					<Image
						width="90px"
						height="90px"
						margin="0px 0px 24px 0px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13:05:31.217Z"
						border-radius="100%"
					/>
					<Text
						font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 12px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						letter-spacing="0.3px"
						color="#3D72CC"
					>
						Евгений Курт{"\n\n"}
					</Text>
					<Text
						font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						letter-spacing="0.3px"
						color="#9BABBF"
					>
						CEO{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image
						width="90px"
						height="90px"
						margin="0px 0px 24px 0px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13:05:31.217Z"
						border-radius="100%"
					/>
					<Text
						font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 12px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						letter-spacing="0.3px"
						color="#3D72CC"
					>
						Евгений Курт{"\n\n"}
					</Text>
					<Text
						font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						letter-spacing="0.3px"
						color="#9BABBF"
					>
						CEO{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="center" flex-direction="column" />
					{"        "}
					<Image
						width="90px"
						height="90px"
						margin="0px 0px 24px 0px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13:05:31.217Z"
						border-radius="100%"
					/>
					<Text
						font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 12px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						letter-spacing="0.3px"
						color="#3D72CC"
					>
						Евгений Курт{"\n\n"}
					</Text>
					<Text
						font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						letter-spacing="0.3px"
						color="#9BABBF"
					>
						CEO{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image
						width="90px"
						height="90px"
						margin="0px 0px 24px 0px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/4.png?v=2021-01-28T13:06:34.865Z"
						border-radius="100%"
					/>
					<Text
						font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 12px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						letter-spacing="0.3px"
						color="#3D72CC"
					>
						специалистов
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 75px 0" background="#3D72CC">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="33.333%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						от 3-x лет
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						опыта на своей позиции у каждого ключевого участника команды
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="33.333%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						12 лет
						<br />
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						на рынке SaaS-решений для создания сайтов и оптимизации их конверсии
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="33.333%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						7 проектов
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						выпущены совместно и успешно работают
						<br />
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 80px 0" sm-padding="30px 0 40px 0" background="#eef2f3">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="975px" width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text font="normal 500 36px/40px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 40px 0px" display="inline-block">
						Последние новости из блогов
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="10px 0px 0px 0px" max-width="1170px" width="100%">
				{"        "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Components.InformerUcoz />
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="40px 0 40px 0">
			<Stack margin="10px 0px 0px 0px" max-width="1170px" width="100%">
				{"        "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="row" align-items="flex-start" />
					<Link
						href="https://www.instagram.com/ucoz_ru/"
						display="flex"
						align-items="center"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						color="#263238"
						hover-color="#4A8CFA"
					>
						<Icon category="fa" icon={FaInstagram} margin="-1px 12px 0px 0px" />
						<Text margin="0px 0px 0px 0px">
							Жизнь команды в Instagram
						</Text>
					</Link>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="row" align-items="center" justify-content="flex-end" />
					<Link
						href="https://vk.com/ucoz"
						display="flex"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						text-decoration-line="initial"
						color="#263238"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						transition="color 0.2s ease 0s"
						hover-color="#4A8CFA"
						target="_blank"
						margin="0px 24px 0px 0px"
					>
						uCoz в ВК
						<Image width="100px" height="100px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/4.png?v=2021-01-28T00:54:51.035Z" margin="18px 0px 0px 0px" />
					</Link>
					<Link
						href="https://vk.com/ucoz"
						display="flex"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						text-decoration-line="initial"
						color="#263238"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						transition="color 0.2s ease 0s"
						hover-color="#4A8CFA"
						target="_blank"
					>
						uKit в ВК
						<Image width="100px" height="100px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01:00:02.248Z" margin="18px 0px 0px 0px" />
					</Link>
					{"            "}
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
					<Link
						href="https://www.facebook.com/ucoz"
						target="_blank"
						margin="0px 15px 0px 0px"
						border-color="#AFC1D8"
						color="#AFC1D8"
						border-radius="50%"
						border-width="2px"
						border-style="solid"
						hover-background="#4a8cfa"
						hover-color="#ffffff"
						hover-border-color="#4a8cfa"
					>
						<Icon
							category="fa"
							icon={FaVk}
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							hover-background="#4a8cfa"
							size="20px"
							hover-color="inherit"
							color="inherit"
							background="#ffffff"
						/>
					</Link>
					<Link
						href="https://www.facebook.com/ucoz"
						target="_blank"
						margin="0px 15px 0px 0px"
						border-color="#AFC1D8"
						color="#AFC1D8"
						border-radius="50%"
						border-width="2px"
						border-style="solid"
						hover-background="#4a8cfa"
						hover-color="#ffffff"
						hover-border-color="#4a8cfa"
					>
						<Icon
							category="fa"
							icon={FaFacebookF}
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							size="20px"
							hover-color="inherit"
							color="inherit"
						/>
					</Link>
					<Link
						href="https://twitter.com/ucoz_ru"
						target="_blank"
						margin="0px 15px 0px 0px"
						border-color="#AFC1D8"
						color="#AFC1D8"
						border-radius="50%"
						border-width="2px"
						border-style="solid"
						hover-background="#4a8cfa"
						hover-color="#ffffff"
						hover-border-color="#4a8cfa"
					>
						<Icon
							category="fa"
							icon={FaTwitter}
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							size="20px"
							hover-color="inherit"
							color="inherit"
						/>
					</Link>
					<Link
						href="https://instagram.com/ucoz_ru"
						target="_blank"
						margin="0px 15px 0px 0px"
						border-color="#AFC1D8"
						color="#AFC1D8"
						border-radius="50%"
						border-width="2px"
						border-style="solid"
						hover-background="#4a8cfa"
						hover-color="#ffffff"
						hover-border-color="#4a8cfa"
					>
						<Icon
							category="fa"
							icon={FaInstagram}
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							size="20px"
							hover-color="inherit"
							color="inherit"
						/>
					</Link>
					<Link
						href="http://ok.ru/ucozru"
						target="_blank"
						margin="0px 15px 0px 0px"
						border-color="#AFC1D8"
						color="#AFC1D8"
						border-radius="50%"
						border-width="2px"
						border-style="solid"
						hover-background="#4a8cfa"
						hover-color="#ffffff"
						hover-border-color="#4a8cfa"
					>
						<Icon
							category="fa"
							icon={FaOdnoklassniki}
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							size="20px"
							hover-color="inherit"
							color="inherit"
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