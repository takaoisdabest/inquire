import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Inquire | Create Online Surveys With Ease</title>
				<meta
					name="description"
					content="Use Inquire to drive your business forward by using our free and easy to use survey tool to capture the voices and opinions of the people who matter most to you."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex-1 flex flex-col gap-4 items-center justify-center px-4 py-20">
				<h1 className="font-righteous font-bold text-3xl">Got questions?</h1>
				<Link
					href="/create"
					className="solid-box-shadow font-mono font-bold bg-black text-white hover:text-accent p-2"
					title="Create a survey"
				>
					Creata a survey!
				</Link>
				<p className="text-center font-sans font-light">
					<span className="font-righteous font-bold text-accent">inquire </span>
					will help you to easily create online surveys to gather the data you need from the those who you
					matter to you the most!
				</p>
			</main>
		</>
	);
}
