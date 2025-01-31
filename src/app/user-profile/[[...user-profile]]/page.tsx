import { UserProfile } from "@clerk/nextjs"
export default function userprofile() {
	return (
		<div className="flex justify-center items-center py-8">
			<UserProfile path="/user-profile"></UserProfile>

		</div>
	)
}