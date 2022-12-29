import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Inquire | Create Surveys With Ease</title>
				<meta
					name="description"
					content="Use Inquire to drive your business forward by using our free and easy to use survey tool to capture the voices and opinions of the people who matter most to you."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}></main>
		</>
	);
}
