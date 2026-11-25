import Head from "next/head";
import React, { useEffect, useState } from "react";

import {
	Anchor,
	AvailabilityLabel,
	Button,
	ButtonProps,
	ChangelogSummary,
	CodeChip,
	DynamicLogo,
	FoldedSheet,
	Footer,
	Heading,
	Logo,
	Navbar,
	PosterLightbox,
	PosterThumbnail,
	SocialLink,
	Strong,
	Text,
} from "../components";
import { Icon, IconName } from "../components/Icon";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../components/Popover";
import { Skeleton } from "../components/Skeleton";
import {
	SPOTIFY_WIDGET_STATUSES,
	SpotifyWidget,
	SpotifyWidgetStatus,
} from "../components/SpotifyWidget";
import { CHANGELOG, POSTERS } from "../data";
import { SocialPlatform } from "../types";

type ButtonSize = NonNullable<ButtonProps["size"]>;
type ButtonVariant = NonNullable<ButtonProps["variant"]>;
type NavbarPreview = "floating" | "resting" | "revealed";

const BUTTON_SIZES = ["sm", "md", "lg", "xl", "icon"] as const;
const BUTTON_VARIANTS = [
	"default",
	"secondary",
	"outline",
	"ghost",
	"link",
] as const;
const ICON_NAMES = [
	"about",
	"arrowLeft",
	"close",
	"dark",
	"dribbble",
	"email",
	"github",
	"globe",
	"instagram",
	"lastfm",
	"light",
	"linkedin",
	"projects",
	"spotify",
] as const satisfies readonly IconName[];
const AVAILABILITY = [
	"plentiful",
	"quite free",
	"fairly limited",
	"non-existent",
] as const;
const SOCIAL_PLATFORMS = [
	"instagram",
	"dribbble",
	"linkedin",
	"github",
	"lastfm",
	"spotify",
] as const satisfies readonly SocialPlatform[];
const NAVBAR_PREVIEW = {
	floating: { direction: "DOWN", y: 300 },
	resting: { direction: "DOWN", y: 0 },
	revealed: { direction: "UP", y: 600 },
} as const satisfies Record<
	NavbarPreview,
	{ direction: "DOWN" | "UP"; y: number }
>;
const CATEGORIES = [
	{
		id: "type",
		items: [
			["heading", "Heading"],
			["text", "Text"],
			["strong", "Strong"],
			["anchor", "Anchor"],
		],
		label: "Type",
	},
	{
		id: "controls",
		items: [
			["button", "Button"],
			["social-link", "Social link"],
			["popover", "Popover"],
			["availability", "Availability"],
		],
		label: "Controls",
	},
	{
		id: "brand",
		items: [
			["icon", "Icon"],
			["logo", "Logo"],
			["dynamic-logo", "Dynamic logo"],
		],
		label: "Brand",
	},
	{
		id: "media",
		items: [
			["poster", "Poster"],
			["folded-sheet", "Folded sheet"],
			["spotify", "Spotify"],
		],
		label: "Media",
	},
	{
		id: "chrome",
		items: [
			["navbar", "Navbar"],
			["footer", "Footer"],
			["changelog", "Changelog"],
		],
		label: "Chrome",
	},
	{
		id: "feedback",
		items: [
			["code-chip", "Code chip"],
			["skeleton", "Skeleton"],
		],
		label: "Feedback",
	},
] as const;

const SECTION_IDS = CATEGORIES.flatMap((category) =>
	category.items.map(([id]) => id),
);

const poster = POSTERS.find((item) => item.format === "poster") ?? POSTERS[0];
const disc = POSTERS.find((item) => item.format === "disc") ?? POSTERS[0];

const Field = <T extends string>({
	label,
	onChange,
	options,
	value,
}: {
	label: string;
	onChange: (value: T) => void;
	options: readonly T[];
	value: T;
}) => (
	<label className="inline-flex items-center h-8 gap-2 text-xs text-textDimmed">
		<span className="whitespace-nowrap">{label}</span>
		<select
			className="h-8 px-2 border rounded-md bg-bg border-textDark/10 text-text"
			onChange={(event) => onChange(event.target.value as T)}
			value={value}
		>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	</label>
);

const Toggle = ({
	checked,
	label,
	onChange,
}: {
	checked: boolean;
	label: string;
	onChange: (checked: boolean) => void;
}) => (
	<label className="inline-flex items-center h-8 gap-2 text-xs whitespace-nowrap text-textDimmed">
		<input
			checked={checked}
			onChange={(event) => onChange(event.target.checked)}
			type="checkbox"
		/>
		{label}
	</label>
);

const Specimen = ({
	children,
	controls,
	id,
	note,
	title,
}: {
	children: React.ReactNode;
	controls?: React.ReactNode;
	id: string;
	note?: string;
	title: string;
}) => (
	<section className="scroll-mt-40" id={id}>
		<div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 mb-3">
			<a className="relative" href={`#${id}`}>
				<Heading
					className="before:absolute before:-left-6 before:font-mono before:font-normal before:text-textDimmedDark/50 before:content-['#'] dark:before:text-textDimmedLight/25"
					level={4}
				>
					{title}
				</Heading>
			</a>
			{controls && (
				<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
					{controls}
				</div>
			)}
		</div>
		{note && (
			<Text className="block mb-3" size="sm">
				{note}
			</Text>
		)}
		<div className="p-5 overflow-hidden border rounded-xl border-textDark/10 bg-bgRaised">
			{children}
		</div>
	</section>
);

const KitchenSink = () => {
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [buttonSize, setButtonSize] = useState<ButtonSize>("md");
	const [buttonVariant, setButtonVariant] = useState<ButtonVariant>("default");
	const [showButtonIcons, setShowButtonIcons] = useState(true);
	const [headingDimmed, setHeadingDimmed] = useState(false);
	const [headingLevel, setHeadingLevel] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
	const [headingAnchored, setHeadingAnchored] = useState(false);
	const [textSize, setTextSize] = useState<"lg" | "md" | "sm" | "xs">("md");
	const [iconName, setIconName] = useState<IconName>("about");
	const [availability, setAvailability] =
		useState<(typeof AVAILABILITY)[number]>("plentiful");
	const [logoDark, setLogoDark] = useState(true);
	const [logoExtended, setLogoExtended] = useState(false);
	const [logoActive, setLogoActive] = useState(false);
	const [socialPlatform, setSocialPlatform] =
		useState<SocialPlatform>("github");
	const [socialLinked, setSocialLinked] = useState(true);
	const [popoverOpen, setPopoverOpen] = useState(false);
	const [posterFormat, setPosterFormat] = useState<"disc" | "poster">("poster");
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [sheetKey, setSheetKey] = useState(0);
	const [navbarPreview, setNavbarPreview] = useState<NavbarPreview>("resting");
	const [spotifyStatus, setSpotifyStatus] =
		useState<SpotifyWidgetStatus>("playing");
	const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0]);

	useEffect(() => {
		const nodes = SECTION_IDS.flatMap((id) => {
			const node = document.getElementById(id);
			return node ? [node] : [];
		});
		const visible = new Map<string, IntersectionObserverEntry>();
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) visible.set(entry.target.id, entry);
					else visible.delete(entry.target.id);
				}

				const current = [...visible.values()].sort(
					(a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
				)[0];
				if (current) setActiveSection(current.target.id);
			},
			{ rootMargin: "-20% 0px -60% 0px" },
		);

		for (const node of nodes) observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Head>
				<title>Kitchen sink</title>
				<meta content="noindex, nofollow" name="robots" />
			</Head>

			<Navbar />

			<div className="max-w-6xl px-6 pt-16 pb-24 mx-auto lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:items-start lg:gap-12">
				<aside className="mb-10 lg:sticky lg:top-40 lg:mb-0 lg:max-h-[calc(100vh-12rem)] lg:overflow-y-auto">
					<nav className="flex flex-col gap-6">
						{CATEGORIES.map((category) => (
							<div key={category.id}>
								<Text
									className="block mb-2 tracking-widest uppercase"
									size="xs"
								>
									{category.label}
								</Text>
								<div className="flex flex-col">
									{category.items.map(([id, label]) => (
										<a
											aria-current={
												activeSection === id ? "location" : undefined
											}
											className="group py-1 text-sm rounded-md"
											href={`#${id}`}
											key={id}
										>
											<span
												className={
													activeSection === id
														? "font-medium text-primary-600 dark:text-primary-300"
														: "text-textDimmed group-hover:text-text"
												}
											>
												{label}
											</span>
										</a>
									))}
								</div>
							</div>
						))}
					</nav>
				</aside>

				<div>
				<header className="mb-10">
					<Text size="sm">Internal</Text>
					<Heading className="mb-2" level={1}>
						Kitchen sink
					</Heading>
					<Text className="block">
						Every component on the site, with its visual states forced from the
						controls. This page is not linked from the navigation.
					</Text>
				</header>

				<div className="flex flex-col gap-12">
					<Specimen
						controls={
							<>
								<Field
									label="Level"
									onChange={(value) =>
										setHeadingLevel(Number(value) as 1 | 2 | 3 | 4 | 5 | 6)
									}
									options={["1", "2", "3", "4", "5", "6"]}
									value={String(headingLevel)}
								/>
								<Toggle
									checked={headingDimmed}
									label="Dimmed"
									onChange={setHeadingDimmed}
								/>
								<Toggle
									checked={headingAnchored}
									label="Anchor"
									onChange={setHeadingAnchored}
								/>
							</>
						}
						id="heading"
						title="Heading"
					>
						<Heading
							id={headingAnchored ? "sink-heading" : undefined}
							isDimmed={headingDimmed}
							level={headingLevel}
						>
							A heading at level {headingLevel}
						</Heading>
					</Specimen>

					<Specimen
						controls={
							<Field
								label="Size"
								onChange={setTextSize}
								options={["xs", "sm", "md", "lg"]}
								value={textSize}
							/>
						}
						id="text"
						title="Text"
					>
						<Text size={textSize}>
							The quick brown fox jumps over the lazy dog.
						</Text>
					</Specimen>

					<Specimen id="strong" title="Strong">
						<Text>
							A sentence with a <Strong>strong</Strong> word in it.
						</Text>
					</Specimen>

					<Specimen id="anchor" title="Anchor">
						<Anchor href="/about">Read the about page</Anchor>
					</Specimen>

					<Specimen
						controls={
							<>
								<Field
									label="Variant"
									onChange={setButtonVariant}
									options={BUTTON_VARIANTS}
									value={buttonVariant}
								/>
								<Field
									label="Size"
									onChange={setButtonSize}
									options={BUTTON_SIZES}
									value={buttonSize}
								/>
								<Toggle
									checked={buttonDisabled}
									label="Disabled"
									onChange={setButtonDisabled}
								/>
								<Toggle
									checked={showButtonIcons}
									label="Icons"
									onChange={setShowButtonIcons}
								/>
							</>
						}
						id="button"
						title="Button"
					>
						<Button
							disabled={buttonDisabled}
							endIcon={showButtonIcons ? "arrowLeft" : undefined}
							size={buttonSize}
							startIcon={showButtonIcons ? "about" : undefined}
							variant={buttonVariant}
						>
							{buttonSize === "icon" ? null : "Label"}
						</Button>
						<div className="grid grid-cols-2 gap-3 mt-8 sm:grid-cols-5">
							{BUTTON_VARIANTS.map((variant) =>
								BUTTON_SIZES.map((size) => (
									<Button key={`${variant}-${size}`} size={size} variant={variant}>
										{size === "icon" ? null : variant}
									</Button>
								)),
							)}
						</div>
					</Specimen>

					<Specimen
						controls={
							<>
								<Field
									label="Platform"
									onChange={setSocialPlatform}
									options={SOCIAL_PLATFORMS}
									value={socialPlatform}
								/>
								<Toggle
									checked={socialLinked}
									label="Links out"
									onChange={setSocialLinked}
								/>
							</>
						}
						id="social-link"
						note="Without a link it renders as a button."
						title="Social link"
					>
						<SocialLink
							href={socialLinked ? "https://ayoub.aabass.net" : undefined}
							platform={socialPlatform}
						/>
					</Specimen>

					<Specimen
						controls={
							<Toggle
								checked={popoverOpen}
								label="Open"
								onChange={setPopoverOpen}
							/>
						}
						id="popover"
						title="Popover"
					>
						<Popover onOpenChange={setPopoverOpen} open={popoverOpen}>
							<PopoverTrigger
								render={<Button variant="outline">Toggle</Button>}
							/>
							<PopoverContent>
								<Text>Forced from the control, or by clicking the button.</Text>
							</PopoverContent>
						</Popover>
					</Specimen>

					<Specimen
						controls={
							<Field
								label="Availability"
								onChange={setAvailability}
								options={AVAILABILITY}
								value={availability}
							/>
						}
						id="availability"
						note="The dot colour is chosen from the label text."
						title="Availability"
					>
						<Text>
							Availability is <AvailabilityLabel>{availability}</AvailabilityLabel>{" "}
							this month.
						</Text>
					</Specimen>

					<Specimen
						controls={
							<Field
								label="Name"
								onChange={setIconName}
								options={ICON_NAMES}
								value={iconName}
							/>
						}
						id="icon"
						title="Icon"
					>
						<div className="flex items-center gap-3 mb-6">
							<Icon className="w-10 h-10" name={iconName} />
							<Text>{iconName}</Text>
						</div>
						<div className="flex flex-wrap gap-4">
							{ICON_NAMES.map((name) => (
								<div
									className="flex flex-col items-center gap-1 w-16"
									key={name}
								>
									<Icon name={name} />
									<Text size="xs">{name}</Text>
								</div>
							))}
						</div>
					</Specimen>

					<Specimen
						controls={
							<>
								<Toggle
									checked={logoDark}
									label="Dark artwork"
									onChange={setLogoDark}
								/>
								<Toggle
									checked={logoExtended}
									label="Extended"
									onChange={setLogoExtended}
								/>
							</>
						}
						id="logo"
						title="Logo"
					>
						<Logo
							height={48}
							isDark={logoDark}
							isExtended={logoExtended}
						/>
					</Specimen>

					<Specimen
						controls={
							<Toggle
								checked={logoActive}
								label="Active"
								onChange={setLogoActive}
							/>
						}
						id="dynamic-logo"
						note="Active reveals the name, the same way scrolling up does in the navbar."
						title="Dynamic logo"
					>
						<div className="h-12">
							<DynamicLogo isActive={logoActive} />
						</div>
					</Specimen>

					<Specimen
						controls={
							<>
								<Field
									label="Format"
									onChange={setPosterFormat}
									options={["poster", "disc"]}
									value={posterFormat}
								/>
								<Toggle
									checked={lightboxOpen}
									label="Lightbox"
									onChange={setLightboxOpen}
								/>
							</>
						}
						id="poster"
						title="Poster"
					>
						<div className="max-w-48">
							<PosterThumbnail
								format={posterFormat}
								onClick={() => setLightboxOpen(true)}
								src={posterFormat === "poster" ? poster.src : disc.src}
								title={posterFormat === "poster" ? poster.name : disc.name}
							/>
						</div>
						<PosterLightbox
							onClose={() => setLightboxOpen(false)}
							open={lightboxOpen}
							poster={posterFormat === "poster" ? poster : disc}
						/>
					</Specimen>

					<Specimen
						controls={
							<Button
								onClick={() => setSheetKey((key) => key + 1)}
								size="sm"
								variant="outline"
							>
								Fold again
							</Button>
						}
						id="folded-sheet"
						note="Click the card to unfold it. Fold again remounts it in the folded state."
						title="Folded sheet"
					>
						<FoldedSheet
							cover={
								<div className="flex items-end h-full p-6">
									<Text size="sm">Ayoub Aabass</Text>
								</div>
							}
							key={sheetKey}
							sheetClassName="px-6 py-8"
						>
							<div className="grid gap-6 sm:grid-cols-2">
								<Heading level={4}>Curriculum vitae</Heading>
								<Text>
									A short stand-in for the sheet, long enough to fold into
									quarters and still show a crease.
								</Text>
								<Text>The bottom half appears once the second fold opens.</Text>
								<Text>Work, tools, and the rest of the page live here.</Text>
							</div>
						</FoldedSheet>
					</Specimen>

					<Specimen
						controls={
							<Field
								label="Status"
								onChange={setSpotifyStatus}
								options={SPOTIFY_WIDGET_STATUSES}
								value={spotifyStatus}
							/>
						}
						id="spotify"
						note="Mock playback, covers and charts. The navbar widget still uses the live Spotify responses."
						title="Spotify"
					>
						<div className="flex flex-col gap-8">
							<SpotifyWidget preview={spotifyStatus} />
							{SPOTIFY_WIDGET_STATUSES.filter(
								(status) => status !== spotifyStatus,
							).map((status) => (
								<div key={status}>
									<Text className="block mb-2 capitalize" size="sm">
										{status}
									</Text>
									<SpotifyWidget preview={status} />
								</div>
							))}
						</div>
					</Specimen>

					<Specimen
						controls={
							<Field
								label="Scroll"
								onChange={setNavbarPreview}
								options={["resting", "floating", "revealed"]}
								value={navbarPreview}
							/>
						}
						id="navbar"
						note="Resting is the top of the page. Floating is scrolled down. Revealed is scrolling back up, which extends the logo."
						title="Navbar"
					>
						<div className="relative h-72 overflow-hidden [transform:translateZ(0)]">
							<Navbar preview={NAVBAR_PREVIEW[navbarPreview]} />
						</div>
					</Specimen>

					<Specimen id="footer" title="Footer">
						<Footer />
					</Specimen>

					<Specimen
						id="changelog"
						note="Summaries appear when a row is hovered."
						title="Changelog"
					>
						<div className="relative h-48 overflow-hidden">
							<div className="absolute top-4 left-4">
								<ChangelogSummary
									versions={CHANGELOG.slice(0, 3).map(({ summary, version }) => ({
										summary,
										version,
									}))}
								/>
							</div>
						</div>
					</Specimen>

					<Specimen id="code-chip" title="Code chip">
						<CodeChip>1.5.1</CodeChip>
					</Specimen>

					<Specimen id="skeleton" title="Skeleton">
						<div className="flex flex-col gap-2 max-w-sm">
							<Skeleton className="w-2/3 h-4" />
							<Skeleton className="w-full h-4" />
							<Skeleton className="w-12 h-12 rounded-full" />
						</div>
					</Specimen>
				</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default KitchenSink;
