import Image from "next/image";
import React from "react";

import { Heading, Text } from ".";

const CoffeeGearGrid = () => {
	return (
		<div className="container grid max-w-5xl grid-cols-6 gap-5 px-6 mx-auto mb-64 sm:grid-cols-3 lg:gap-8 lg:grid-cols-11 lg:grid-rows-6">
			<div className="relative col-span-6 p-4 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 lg:row-span-6 lg:col-span-6 sm:row-span-2 sm:col-span-2 rounded-2xl border-textDimmedLight/20 aspect-square group">
				<div className="transition-all duration-100 group-hover:translate-x-1">
					<Text size="sm">MACHINE</Text>
					<Heading
						className="transition-all duration-100 opacity-25 group-hover:opacity-100 text-8xl md:text-8xl"
						level={5}
					>
						Sage Barista Express
					</Heading>
				</div>

				<div className="absolute w-[120%] -bottom-80 -left-40 group-hover:-translate-y-4 transition-all">
					<Image
						alt="Sage Barista Express"
						className="h-full"
						height={768}
						objectFit="contain"
						src="/coffee/machine.png"
						width={768}
					/>
				</div>
			</div>

			<div className="relative col-span-3 px-4 py-3 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 group sm:row-span-1 sm:col-span-1 lg:row-span-3 lg:col-end-10 lg:col-start-7 rounded-2xl border-textDimmedLight/20 aspect-square ">
				<div className="transition-all duration-100 group-hover:translate-x-1">
					<Text size="sm">GRINDER</Text>
					<Heading
						className="text-3xl transition-all duration-100 opacity-25 group-hover:opacity-100 md:text-5xl"
						level={5}
					>
						Fellow Ode
					</Heading>
				</div>

				<div className="absolute group-hover:-translate-x-4 transition-all h-[120%] w-[120%] -bottom-12 -right-24">
					<Image
						alt="Fellow Ode Grinder"
						className="h-full"
						height={384}
						objectFit="contain"
						src="/coffee/grinder.png"
						width={384}
					/>
				</div>
			</div>
			<div className="relative col-span-3 px-4 py-3 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 group lg:row-start-4 sm:row-span-1 sm:col-span-1 lg:row-end-7 lg:col-end-10 lg:col-start-7 rounded-2xl border-textDimmedLight/20 aspect-square">
				<div className="transition-all duration-100 group-hover:translate-x-1">
					<Text size="sm">KETTLE</Text>
					<Heading
						className="text-3xl transition-all duration-100 opacity-25 group-hover:opacity-100 md:text-5xl"
						level={5}
					>
						Fellow Stagg
					</Heading>
				</div>

				<div className="absolute group-hover:-translate-y-4 transition-all w-[137.5%] -right-12 -bottom-16">
					<Image
						alt="Fellow Stagg Kettle"
						className="h-full"
						height={320}
						objectFit="contain"
						src="/coffee/kettle.png"
						width={320}
					/>
				</div>
			</div>

			<div className="relative col-span-2 px-3 py-1 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 group lg:row-span-2 lg:col-span-2 lg:col-start-10 rounded-2xl border-textDimmedLight/20 aspect-square sm:row-span-1 sm:col-span-1">
				<div className="transition-all duration-100 group-hover:translate-x-1">
					<Text size="xs">BREWER</Text>
					<Heading
						className="transition-all duration-100 opacity-25 group-hover:opacity-100"
						level={5}
					>
						Hario v60
					</Heading>
				</div>

				<div className="absolute group-hover:rotate-[10deg] group-hover:-translate-y-2 group-hover:-translate-x-6 transition-all w-[90%] -right-4 -bottom-9">
					<Image
						alt="Hario v60"
						className="h-full"
						height={320}
						objectFit="contain"
						src="/coffee/v60.webp"
						width={320}
					/>
				</div>
			</div>
			<div className="relative col-span-2 px-3 py-1 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 group lg:row-span-2 lg:col-span-2 lg:col-start-10 rounded-2xl border-textDimmedLight/20 aspect-square sm:row-span-1 sm:col-span-1">
				<div className="transition-all duration-100 group-hover:translate-x-1">
					<Text size="xs">BREWER</Text>
					<Heading
						className="transition-all duration-100 opacity-25 group-hover:opacity-100"
						level={5}
					>
						Aeropress
					</Heading>
				</div>

				<div className="absolute group-hover:rotate-[15deg] group-hover:translate-y-2 transition-all w-full rotate-[30deg] -right-8 -bottom-6">
					<Image
						alt="Aeropress"
						className="h-full"
						height={320}
						objectFit="contain"
						src="/coffee/aeropress.png"
						width={320}
					/>
				</div>
			</div>
			<div className="relative col-span-2 px-3 py-1 overflow-hidden transition-all duration-100 border hover:border-textDimmedLight/40 group lg:row-span-2 lg:col-span-2 lg:col-start-10 rounded-2xl border-textDimmedLight/20 aspect-square sm:row-span-1 sm:col-span-1">
				<div className="transition-all duration-100 group-hover:translate-x-1">
					<Text size="xs">SCALE</Text>
					<Heading
						className="transition-all duration-100 opacity-25 group-hover:opacity-100"
						level={5}
					>
						Rhino Dosing Scale
					</Heading>
				</div>

				<div className="absolute group-hover:translate-y-2 transition-all w-[120%] -right-12 -bottom-16 scale-x-[-1]">
					<Image
						alt="Rhinow Dosing Scale"
						className="h-full"
						height={320}
						objectFit="contain"
						src="/coffee/scale.png"
						width={320}
					/>
				</div>
			</div>
		</div>
	);
};

export default CoffeeGearGrid;
