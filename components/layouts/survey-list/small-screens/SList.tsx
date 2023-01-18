import { ReactNode } from "react";

type MListProps = { children: ReactNode };

function SList({ children }: MListProps) {
	return <div className="w-full divide-y-[1px] border-y-[1px] md:hidden">{children}</div>;
}
export default SList;
