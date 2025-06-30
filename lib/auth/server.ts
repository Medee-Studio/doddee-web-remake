import { redirect } from "next/navigation";

export function redirectToPath(path: string) {
  return redirect(path);
}