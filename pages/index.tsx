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
			<main className="py-16">
				{/* SECTION #1 */}
				<section className="h-[650px] flex flex-col justify-center items-center gap-4 p-4 bg-gray-200 md:flex-row">
					<div className="flex flex-col items-stretch gap-4 md:items-start">
						<h1 className="font-mono font-bold text-2xl">Create free surveys online in minutes</h1>
						<p className="font-light">
							Easily create and share online surveys with unlimited questions and responses!
						</p>
						<Link
							href="/create"
							className="flex justify-center solid-box-shadow font-mono font-bold bg-black text-white hover:text-accent p-2"
						>
							Get Started
						</Link>
					</div>

					<Image src="/img/checklist-amico.svg" width={300} height={100} alt="" />
				</section>

				{/* SECTION #2 */}
				<section className="h-[650px] flex flex-col justify-center items-center gap-4 p-4 bg-white md:flex-row-reverse">
					<div className="flex flex-col items-stretch gap-4 md:items-start">
						<h1 className="font-mono font-bold text-2xl">View yor data in charts</h1>
						<p className="font-light">
							<span className="font-bold font-righteous text-accent">inquire</span> will automatically
							generate beautiful charts from your data!
						</p>
					</div>

					<Image src="/img/statistics-amico.svg" width={300} height={100} alt="" />
				</section>

				{/* SECTION #3 */}
				<section className="h-[650px] flex flex-col justify-center items-center gap-4 p-4 bg-gray-200 md:flex-row">
					<div className="flex flex-col items-stretch gap-4 md:items-start">
						<h1 className="font-mono font-bold text-2xl">Analyze your data</h1>
						<p className="font-light">With your data organized into charts, analyzing it is easy!</p>
					</div>

					<Image src="/img/data-amico.svg" width={300} height={100} alt="" />
				</section>

				{/* SECTION #4 */}
				<section className="h-[650px] flex flex-col justify-center items-center gap-4 p-4 bg-white md:flex-row">
					<div className="flex flex-col items-stretch gap-4 md:items-start">
						<h1 className="font-mono font-bold text-2xl">Get started now</h1>
						<p className="font-light">
							Use our easy online survey maker for hundreds of applications and optimize the process of
							your survey creation!
						</p>
						<Link
							href="/create"
							className="flex justify-center solid-box-shadow font-mono font-bold bg-black text-white hover:text-accent p-2"
						>
							Get Started
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
