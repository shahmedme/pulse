import { AuthModal } from "./auth";
import Header from "./Header";
import Sidebar from "./sidebar";
import { Toaster } from "./ui/sonner";

type AppWrapperProps = {
	children: React.ReactNode;
};

export default function AppWrapper({ children }: AppWrapperProps) {
	return (
		<div>
			<div className="flex">
				<Sidebar />
				<div className="flex-1">
					<Header />
					{children}
				</div>
			</div>
			<AuthModal />
			<Toaster />
		</div>
	);
}
