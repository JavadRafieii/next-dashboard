'use server'

import { getTranslations } from 'next-intl/server';
import supabase from "../supabase/supabase.config";
import { hashPassword } from '../lib/hashPassword';
import { generateToken, setCookie } from '../lib/cookie';
import { redirect } from 'next/navigation';

export default async function registerUser(formData, locale) {
    const t = await getTranslations('Authenticate');
    const { fullname, email, password } = formData;

    try {
        const newToken = generateToken();

        const hashedPassword = await hashPassword(password);

        const token = await setCookie("token", newToken, {
            httpOnly: true,
            secure: true,
            path: "/",
            maxAge: 7 * 24 * 60 * 60,
            sameSite: "strict",
        });

        const { data, error } = await supabase
            .from("users")
            .insert([
                {
                    fullname,
                    email,
                    password: hashedPassword,
                    token,
                },
            ]);

        if (error) {
            if (error.code === "23505") {
                return { error: t('serverSideErrorRegisteredEmail') }
            }
        }
    } catch (error) {
        console.log(error);
        return { error: t('serverSideError') }
    }

   redirect("/");
}