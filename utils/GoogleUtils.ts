import { User } from "@/types/AuthType";

export async function getUserInfo(token: string | undefined): Promise<User> {
  if (!token) throw new Error("No token provided");
  const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error("Failed to fetch user info");
  const userInfo = await response.json();
  return {
    email: userInfo.email,
    name: userInfo.given_name,
    picture: userInfo.picture,
    familyName: userInfo.family_name,
    fullName: userInfo.name,
  };
}
