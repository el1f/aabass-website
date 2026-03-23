import { useMouse } from "@uidotdev/usehooks";
import { motion, transform, useScroll, useTransform } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

import {
	Button,
	Footer,
	Heading,
	Logo,
	Navbar,
	Seo,
	Text,
	Trans,
} from "../components";
import { useTheme } from "next-themes";

const Portrait = () => {
	const [mouse, ref] = useMouse<HTMLElement>();
	const { scrollYProgress } = useScroll({
		offset: ["start 256px", "end start"],
	});

	const [fgLoaded, setFgLoaded] = useState(false);
	const [bgLoaded, setBgLoaded] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [tilt, setTilt] = useState({ x: 0, y: 0 });

	// Check if device is mobile
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		setIsMobile(mediaQuery.matches);
		const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	// Handle device orientation for mobile
	useEffect(() => {
		if (!isMobile) return;

		const handleOrientation = (event: DeviceOrientationEvent) => {
			const gamma = event.gamma || 0; // Left-right tilt (-90 to 90 degrees)
			const beta = event.beta || 0; // Front-back tilt (-180 to 180 degrees)

			// Smooth the values to reduce jitter
			setTilt((prev) => ({
				x: prev.x + (gamma - prev.x) * 0.1,
				y: prev.y + (beta - prev.y) * 0.1,
			}));
		};

		if (window.DeviceOrientationEvent) {
			window.addEventListener("deviceorientation", handleOrientation);
			return () =>
				window.removeEventListener("deviceorientation", handleOrientation);
		}
	}, [isMobile]);

	// Transformers for mouse-based parallax
	const xTransformer = transform(
		[0, (ref.current?.clientWidth ?? 0) / 2, ref.current?.clientWidth ?? 0],
		[-16, 0, 16],
	);
	const yTransformer = transform(
		[0, (ref.current?.clientHeight ?? 0) / 2, ref.current?.clientHeight ?? 0],
		[-8, 0, 8],
	);

	// Transformers for accelerometer-based parallax
	const tiltXTransformer = transform(
		[-30, 0, 30], // Map tilt angles (-30 to 30 degrees)
		[-16, 0, 16], // Same offset range as mouse
	);
	const tiltYTransformer = transform(
		[-30, 0, 30], // Map tilt angles
		[-8, 0, 8], // Same offset range as mouse
	);

	// Choose offset based on device type
	const offsetX = isMobile
		? tiltXTransformer(tilt.x)
		: xTransformer(mouse.elementX);
	const additionalOffsetY = isMobile
		? tiltYTransformer(tilt.y)
		: yTransformer(mouse.elementY);
	const offsetY = useTransform(scrollYProgress, [0, 1], [0, 128]);

	return (
		<figure
			className="relative flex-shrink-0 w-full overflow-hidden bg-textDimmed"
			ref={ref}
			style={{
				perspective: 1000,
			}}
		>
			<motion.div
				animate={{
					opacity: fgLoaded ? 1 : 0,
					transition: {
						duration: 4,
					},
				}}
				className="absolute bottom-0 left-0 z-10 scale-125 [&>span]:!overflow-visible"
				style={{
					rotateY: offsetX / 4,
					translateX: offsetX / 4,
					translateY: offsetY,
					y: additionalOffsetY / 4,
				}}
			>
				<Image
					alt="The foreground of the picture"
					className="block w-full [&>span]:overflow-visible scale-110"
					height={2843}
					objectFit="cover"
					onLoad={() => setFgLoaded(true)}
					src="/me/me_fg.png"
					width={5512}
				/>
			</motion.div>
			<motion.div
				animate={{
					opacity: bgLoaded ? 1 : 0,
					transition: {
						duration: 4,
					},
				}}
				className="[&>span]:!overflow-visible"
				style={{
					translateX: offsetX,
					translateY: offsetY,
					y: additionalOffsetY,
				}}
			>
				<Image
					alt="The background of the picture"
					className="block w-full scale-125"
					height={2843}
					objectFit="cover"
					onLoad={() => setBgLoaded(true)}
					src="/me/me_bg.png"
					width={5512}
				/>
			</motion.div>
		</figure>
	);
};

const About: NextPage = () => {
	const { t } = useTranslation(["common", "about", "cv"]);
	const { resolvedTheme } = useTheme();

	return (
		<>
			<Seo title={t("about:pageTitle")} />

			<Navbar />

			<section className="container max-w-5xl mx-auto print:hidden">
				<header className="container max-w-2xl px-6 pt-32 pb-8 mx-auto">
					<Text size="md">{t("about:lead")}</Text>
					<Heading className="mb-4" level={1}>
						{t("about:title")}
					</Heading>
				</header>

				<div className="flex flex-col items-start gap-12">
					<Portrait />
					{/* <figure className="relative flex-shrink-0 w-full">
						<Image
							alt="A picture of myself"
							className="w-full"
							height={2843}
							objectFit="cover"
							src="/me/me.jpg"
							width={5512}
						/>
					</figure> */}

					<Text as="div" className="max-w-2xl px-6 mx-auto leading-loose">
						<Trans i18nKey="about:bio" />
					</Text>
				</div>
			</section>

			<section id="cv">
				<header className="container max-w-2xl px-6 pt-24 pb-8 mx-auto print:hidden print:pt-0">
					<Heading className="mb-4 leading-snug" level={1}>
						{t("cv:title")}
					</Heading>
				</header>

				<div className="container grid max-w-5xl grid-cols-1 px-6 py-10 mx-auto mb-48 gap-x-10 md:gap-x-32 sm:gap-y-16 gap-y-8 sm:grid-cols-cv print:grid-cols-cv print:pt-16 bg-bgRaised">
					<header className="flex items-start justify-between gap-6 sm:col-span-2">
						<Logo isDark={resolvedTheme === "dark"} height={80} />

						<div className="grid sm:grid-flow-col grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-x-6 gap-y-0.5">
							<Button
								asChild
								className="justify-start w-full h-6 text-left"
								size="sm"
								startIcon="globe"
								variant="ghost"
							>
								<Link href="https://ayoub.aabass.net">ayoub.aabass.net</Link>
							</Button>
							<Button
								asChild
								className="justify-start w-full h-6 text-left"
								size="sm"
								startIcon="email"
								variant="ghost"
							>
								<Link href="mailto:ayoub@aabass.net">ayoub@aabass.net</Link>
							</Button>
							<Button
								asChild
								className="justify-start w-full h-6 text-left"
								size="sm"
								startIcon="github"
								variant="ghost"
							>
								<Link href="https://ayoub.aabass.net">@el1f</Link>
							</Button>
							<Button
								asChild
								className="justify-start w-full h-6 text-left"
								size="sm"
								startIcon="dribbble"
								variant="ghost"
							>
								<Link href="https://dribbble.com/el1flem">@el1flem</Link>
							</Button>
							<Button
								asChild
								className="justify-start w-full h-6 text-left"
								size="sm"
								startIcon="instagram"
								variant="ghost"
							>
								<Link href="https://www.instagram.com/eliflem_design/">
									@eliflem_design
								</Link>
							</Button>
							<Button
								asChild
								className="justify-start w-full h-6 text-left"
								size="sm"
								startIcon="linkedin"
								variant="ghost"
							>
								<Link href="https://www.linkedin.com/in/el1flem">@el1flem</Link>
							</Button>
						</div>
					</header>
					<div className="flex flex-col gap-2 print:pb-12">
						<Heading level={3}>{t("common:fullName")}</Heading>
						<Text>{t("common:professionalRole")}</Text>
					</div>
					<Text>{t("cv:document.introduction")}</Text>

					<Heading className="mt-0 xs:mt-12" level={5}>
						{t("cv:document.dev.title")}
					</Heading>
					<div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:gap-y-2 sm:grid-cols-3 print:grid-cols-3">
						{(
							t("cv:document.dev.skills", { returnObjects: true }) as string[]
						).map((skill) => (
							<Text key={skill}>{skill}</Text>
						))}
					</div>

					<Heading className="mt-0 xs:mt-12" level={5}>
						{t("cv:document.des.title")}
					</Heading>
					<div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:gap-y-2 sm:grid-cols-3 print:grid-cols-3">
						{(
							t("cv:document.des.skills", { returnObjects: true }) as string[]
						).map((skill) => (
							<Text key={skill}>{skill}</Text>
						))}
					</div>

					<Heading className="mt-0 xs:mt-12" level={5}>
						Work experience
					</Heading>
					<div className="flex flex-col gap-4">
						{(
							t("cv:document.experience.items", { returnObjects: true }) as {
								company: string;
								location: string;
								period: string;
								role: string;
								tasks: string[];
							}[]
						).map((job) => (
							<div className="flex flex-col gap-1" key={job.company}>
								<Text className="leading-none" size="sm">
									<strong className="dark:text-textLight text-textDark">
										{job.period} / {job.location}
									</strong>
								</Text>
								<Text>{`${job.role}${
									job.company ? ` @${job.company}` : ""
								}`}</Text>
							</div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? "en", [
			"common",
			"about",
			"cv",
			"changelog",
		])),
	},
});

export default About;
