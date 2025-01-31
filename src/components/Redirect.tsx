// components/RedirectButton.tsx
"use client";
import { useRouter } from 'next/navigation';

const RedirectButton = () => {
	const router = useRouter();

	const handleRedirect = () => {
		router.push("/manisk"); // Navigate to /manisk
	};

	return (
		<button onClick={handleRedirect} className="btn">
			Flipkart
		</button>
	);
};

export default RedirectButton;
