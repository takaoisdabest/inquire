import Head from "next/head";
import { useState } from "react";

// Components
import SList from "../../../components/layouts/survey-list/small-screens/SList";
import SItem from "../../../components/layouts/survey-list/small-screens/SItem";
import List from "../../../components/layouts/survey-list/large-screens/List";
import Item from "../../../components/layouts/survey-list/large-screens/Item";
import { Button, LinkButton } from "../../../components/ui/Button";

// Icons
import { FaCheckCircle, FaExclamationTriangle, FaHourglassStart, FaMinusCircle, FaTimes } from "react-icons/fa";

function dashbord() {
	const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
	const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
	const [actionSurvey, setActionSurvey] = useState("");

	const openOptions = (survey: string) => {
		setActionSurvey(survey);
		setIsOptionsOpen(true);
	};

	const openDeleteDialog = (survey: string) => {
		setActionSurvey(survey);
		setIsDeleteOpen(true);
	};

	const closeOptions = () => {
		setIsOptionsOpen(false);
	};

	const closeDelete = () => {
		setIsDeleteOpen(false);
	};

	return (
		<>
			<Head>
				<title>Inquire | Dashboard</title>
			</Head>
			<main className="relative flex-1 flex flex-col gap-4 items-center px-4 pt-20">
				<h3 className="w-full flex justify-start font-righteous text-lg">Dashboard</h3>

				<SList>
					{["survey1", "survey2", "survey3", "survey4", "survey5"].map((survey) => (
						<SItem
							survey={survey}
							isOptionsOpen={isOptionsOpen}
							openOptions={openOptions}
							closePopups={closeOptions}
						/>
					))}
				</SList>

				<List>
					{["survey1", "survey2", "survey3", "survey4", "survey5"].map((survey) => (
						<Item survey={survey} openDelete={openDeleteDialog} />
					))}
				</List>

				{
					// Backdrop
					(isOptionsOpen || isDeleteOpen) && (
						<div
							className="z-20 w-screen h-screen fixed top-0 left-0 bottom-0 bg-black opacity-25"
							aria-hidden
							onClick={() => {
								closeOptions();
								closeDelete();
							}}
						></div>
					)
				}

				{/* Mobile options popup */}
				<div
					className={`z-30 w-full fixed top-auto bottom-0 left-0 p-4 ${
						isOptionsOpen ? "bottom-0" : "-bottom-[17.2rem]"
					} bg-white transition-all duration-200 ease-in-out md:hidden`}
				>
					<div className="flex justify-between gap-4 min-w-0">
						<h5 className="py-2 text-ellipsis overflow-hidden whitespace-nowrap text-sm font-bold font-mono">
							{actionSurvey}
						</h5>
						<button
							className="flex justify-center items-center text-base p-2 cursor-pointer"
							onClick={closeOptions}
						>
							<FaTimes />
						</button>
					</div>

					<h6 className="text-xs font-bold font-mono mb-2 text-slate-400">Status</h6>
					<div className="flex justify-evenly">
						<button
							className={`flex flex-col justify-center items-center gap-1 text-xs font-bold p-4 hover:bg-slate-100 hover:text-accent active:bg-slate-200 transition-colors duration-100`}
						>
							<FaHourglassStart />
							<span>Ongoing</span>
						</button>
						<button
							className={`flex flex-col justify-center items-center gap-1 text-xs font-bold p-4 hover:bg-slate-100 hover:text-accent active:bg-slate-200 transition-colors duration-100`}
						>
							<FaCheckCircle />
							<span>Concluded</span>
						</button>
						<button
							className={`flex flex-col justify-center items-center gap-1 text-xs font-bold p-4 hover:bg-slate-100 hover:text-accent active:bg-slate-200 transition-colors duration-100`}
						>
							<FaMinusCircle />
							<span>Cancelled</span>
						</button>
					</div>

					<h6 className="text-xs font-bold font-mono mb-2 text-slate-400">Actions</h6>
					<div className="flex flex-col-reverse gap-4">
						<Button
							color="danger"
							ariaLabel="delete survey"
							clickHandler={() => {
								setIsDeleteOpen(true);
							}}
						>
							Delete
						</Button>
						<LinkButton href={`/u/${"name"}/s/${"id"}/edit`} color="secondary" ariaLabel="edit survey">
							Edit
						</LinkButton>
					</div>
				</div>

				{
					/* Delete dialog */
					isDeleteOpen && (
						<div className="z-50 absolute bg-white p-4">
							<h3 className="flex items-center gap-2 font-mono font-bold text-lg">
								<FaExclamationTriangle />
								<span>Delete</span>
							</h3>
							<p className="my-4">Delete "{actionSurvey}"? You cannot revert this action!</p>
							<div className="flex gap-4">
								<Button
									color="danger"
									ariaLabel="delete survey"
									clickHandler={() => {
										console.log(`deleted ${actionSurvey}`);
									}}
								>
									Delete
								</Button>
								<Button color="secondary" ariaLabel="cancel" clickHandler={closeDelete}>
									Cancel
								</Button>
							</div>
						</div>
					)
				}
			</main>
		</>
	);
}
export default dashbord;
