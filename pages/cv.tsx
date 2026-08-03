import { NextPage } from "next";

import { ContactLink, Footer, Heading, Navbar, Seo, Text } from "../components";
import {
	CV_CONTACTS,
	CV_INTRODUCTION,
	DESIGN_SKILLS,
	DEV_SKILLS,
	WORK_EXPERIENCE,
} from "../data";

const Curriculum: NextPage = () => {
	return (
		<>
			<Seo title="Ayoub's CV" />

			<Navbar />

			<header className="container max-w-2xl px-6 pt-32 pb-16 mx-auto print:hidden">
				<Heading className="mb-4 leading-snug" level={1}>
					Curriculum Vitae
				</Heading>
			</header>

			<div className="container grid max-w-4xl px-6 mx-auto mb-48 gap-x-10 md:gap-x-32 sm:gap-y-16 gap-y-4 xs:grid-cols-1 sm:grid-cols-cv print:grid-cols-cv print:pt-16">
				<div className="flex flex-col gap-2 print:pb-12">
					<Heading level={3}>Ayoub Aabass</Heading>
					<Text>Senior Full-stack developer and designer</Text>
				</div>
				<Text>{CV_INTRODUCTION}</Text>

				<Heading className="mt-0 xs:mt-12" level={5}>
					Current dev knowledge
				</Heading>
				<div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:gap-y-2 sm:grid-cols-3 print:grid-cols-3">
					{DEV_SKILLS.map((skill) => (
						<Text key={skill}>{skill}</Text>
					))}
				</div>

				<Heading className="mt-0 xs:mt-12" level={5}>
					Current design knowledge
				</Heading>
				<div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:gap-y-2 sm:grid-cols-3 print:grid-cols-3">
					{DESIGN_SKILLS.map((skill) => (
						<Text key={skill}>{skill}</Text>
					))}
				</div>

				<Heading className="mt-0 xs:mt-12" level={5}>
					Work experience
				</Heading>
				<div className="flex flex-col gap-4">
					{WORK_EXPERIENCE.map((job) => (
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

				<Heading className="mt-0 xs:mt-12" level={5}>
					Contacts
				</Heading>
				<div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-x-8 gap-y-4">
					<ContactLink
						href="mailto:ayoub@aabass.net"
						label={CV_CONTACTS.email.title}
						value={CV_CONTACTS.email.value}
					/>
					<ContactLink
						href={`tel:${CV_CONTACTS.phone.value}`}
						label={CV_CONTACTS.phone.title}
						value={CV_CONTACTS.phone.value}
					/>
					<ContactLink
						href={`https://${CV_CONTACTS.web.value}`}
						label={CV_CONTACTS.web.title}
						value={CV_CONTACTS.web.value}
					/>
					<ContactLink
						href={`https://${CV_CONTACTS.github.value}`}
						label={CV_CONTACTS.github.title}
						value={CV_CONTACTS.github.value}
					/>
					<ContactLink
						href={`https://${CV_CONTACTS.dribbble.value}`}
						label={CV_CONTACTS.dribbble.title}
						value={CV_CONTACTS.dribbble.value}
					/>
					<ContactLink
						href={`https://${CV_CONTACTS.instagram.value}`}
						label={CV_CONTACTS.instagram.title}
						value={CV_CONTACTS.instagram.value}
					/>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Curriculum;
