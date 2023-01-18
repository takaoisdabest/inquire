import { ReactNode } from "react";

type ListProps = {
	children: ReactNode;
};

function List({ children }: ListProps) {
	return (
		<table className="w-full hidden divide-y-[1px] md:table">
			<thead>
				<tr className="">
					<th className="w-[40%]">Title</th>
					<th>Start - End</th>
					<th>Status</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody className="divide-y-[1px]">{children}</tbody>
		</table>
	);
}
export default List;
