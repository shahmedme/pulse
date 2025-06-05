"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setIsAuthRequired } from "@/store/slices/authSlice";

export function AuthModal() {
	const [isLoginMode, setIsLoginMode] = useState(true);
	const { isAuthRequired } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();

	const handleOpenChange = (open: boolean) => {
		dispatch(setIsAuthRequired(open));
		setTimeout(() => setIsLoginMode(true), 500);
	};

	return (
		<Dialog open={isAuthRequired} onOpenChange={handleOpenChange}>
			<DialogContent className="sm:max-w-[450px]">
				{isLoginMode ? (
					<LoginForm onSuccess={() => handleOpenChange(false)} />
				) : (
					<RegisterForm onSuccess={() => setIsLoginMode(true)} />
				)}
				<div className="text-center text-sm">
					{isLoginMode ? "Don't have an account?" : "Already have an account?"}
					&nbsp;
					<span
						className="underline underline-offset-4 cursor-pointer"
						onClick={() => setIsLoginMode(!isLoginMode)}
					>
						{isLoginMode ? "Sign up" : "Login"}
					</span>
				</div>
			</DialogContent>
		</Dialog>
	);
}
