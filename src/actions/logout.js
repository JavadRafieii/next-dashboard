'use server'

import { deleteCookie } from "../lib/cookie";
import { redirect } from "next/navigation";

export default async function logoutUser() {
    await deleteCookie("token");
    redirect("/authenticate");
}