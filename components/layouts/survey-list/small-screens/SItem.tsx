import Link from "next/link";
import { MouseEventHandler } from "react";

// Icons
import { FaEllipsisV } from "react-icons/fa";

type MItemProps = {
	survey?: any;
	isOptionsOpen: boolean;
	openOptions: Function;
	closePopups: MouseEventHandler<HTMLButtonElement>;
};

function SItem({ survey, isOptionsOpen, openOptions, closePopups }: MItemProps) {
	const selectSurvey = () => {
		openOptions(survey);
	};

	return (
		<div className="flex justify-center items-center max-w-full">
			<Link
				href={`/u/${"name"}/s/${"id"}`}
				className="flex-1 text-ellipsis overflow-hidden whitespace-nowrap p-4 hover:text-accent transition-colors duration-100"
			>
				{survey}
			</Link>

			<span className="h-8 w-[1px] border-l-2"></span>

			<button
				className="p-4 text-slate-400 hover:bg-slate-100 transition-colors duration-100"
				aria-label="change survey status"
				onClick={selectSurvey}
			>
				<FaEllipsisV />
			</button>
		</div>
	);
}
export default SItem;
