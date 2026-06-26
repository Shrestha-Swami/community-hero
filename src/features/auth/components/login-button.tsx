"use client"

import { Button } from "@/components/ui/button"

interface LoginButtonProps {
	onLogin: () => Promise<unknown> | void
	disabled?: boolean
}

export function LoginButton({ onLogin, disabled }: LoginButtonProps) {
	return (
		<Button size="sm" type="button" onClick={onLogin} disabled={disabled}>
			Become a Hero
		</Button>
	)
}
