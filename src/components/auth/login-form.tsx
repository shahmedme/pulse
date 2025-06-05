"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";

const loginSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
	onSuccess?: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormValues) => {
		try {
			setIsLoading(true);

			const result = await signIn("credentials", {
				email: data.email,
				password: data.password,
				redirect: false,
			});

			if (result?.error) {
				toast.error("Invalid email or password");
				return;
			}

			reset();
			onSuccess?.();
			router.refresh();
		} catch (error) {
			toast.error("Something went wrong. Please try again.");
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="py-4">
			<CardHeader className="text-center">
				<CardTitle className="text-xl">Welcome back</CardTitle>
				<CardDescription>Login with your email and password</CardDescription>
			</CardHeader>
			<form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
				<div className="grid gap-4">
					<div className="grid gap-4">
						<div>
							<Label htmlFor="email" className="mb-2">
								Email
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								{...register("email")}
								disabled={isLoading}
								aria-invalid={errors.email ? "true" : "false"}
							/>
						</div>
						<div>
							<div className="flex items-center mb-2">
								<Label htmlFor="password">Password</Label>
								<a
									href="#"
									className="ml-auto text-sm underline-offset-4 hover:underline"
								>
									Forgot your password?
								</a>
							</div>
							<Input
								id="password"
								type="password"
								{...register("password")}
								disabled={isLoading}
								aria-invalid={errors.password ? "true" : "false"}
							/>
						</div>
						<Button
							type="submit"
							className="w-full cursor-pointer"
							disabled={isLoading}
						>
							{isLoading ? "Logging in..." : "Login"}
						</Button>
					</div>
					<div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
						<span className="bg-card text-muted-foreground relative z-10 px-2">
							Or continue with
						</span>
					</div>
					<div className="flex flex-col gap-3">
						<Button variant="outline" className="w-full" disabled={isLoading}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="mr-2 h-4 w-4"
							>
								<path
									d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
									fill="currentColor"
								/>
							</svg>
							Login with Google
						</Button>
						<Button variant="outline" className="w-full" disabled={isLoading}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="mr-2 h-4 w-4"
							>
								<path
									d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
									fill="currentColor"
								/>
							</svg>
							Login with GitHub
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
