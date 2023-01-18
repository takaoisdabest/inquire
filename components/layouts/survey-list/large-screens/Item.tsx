import Link from "next/link";
import { MouseEventHandler } from "react";

// Icons
import { FaCheckCircle, FaHourglassStart, FaMinusCircle, FaPen, FaTrash } from "react-icons/fa";

type ItemProps = {
	survey?: any;
	openDelete: (survey: any) => void;
};

function Item({ survey, openDelete }: ItemProps) {
	return (
		<tr className="relative hover:bg-slate-50 transition-colors duration-100">
			<td className="max-w-0 text-ellipsis overflow-hidden whitespace-nowrap">
				<Link
					href={`/u/${"name"}/s/${"id"}`}
					className="text-sm px-2 hover:text-accent transition-colors duration-100"
				>
					{survey}
				</Link>
			</td>

			<td className="text-xs text-center items-center">00/00/0000 - 00/00/0000 </td>

			<td>
				<div className="h-full w-full flex justify-center items-center">
					<button
						className={`p-4 hover:text-accent transition-colors duration-100`}
						title="Change status to concluded"
						aria-label="change status to concluded"
					>
						<FaCheckCircle />
					</button>
					<button
						className={`p-4 hover:text-accent transition-colors duration-100`}
						title="Change status to ongoing"
						aria-label="change status to ongoing"
					>
						<FaHourglassStart />
					</button>
					<button
						className={`p-4 hover:text-accent transition-colors duration-100`}
						title="Change status to cancelled"
						aria-label="change status to cancelled"
					>
						<FaMinusCircle />
					</button>
				</div>
			</td>

			<td>
				<div className="h-full w-full flex justify-center items-center">
					<Link
						href={`/u/${"name"}/s/${"id"}/edit`}
						className={`p-4 hover:text-accent transition-colors duration-100`}
						title="Edit survey"
						aria-label="edit survey"
					>
						<FaPen />
					</Link>
					<button
						className={`p-4 hover:text-red-600 transition-colors duration-100`}
						title="Delete survey"
						aria-label="delete survey"
						onClick={() => openDelete(survey)}
					>
						<FaTrash />
					</button>
				</div>
			</td>
		</tr>
	);
}
export default Item;
