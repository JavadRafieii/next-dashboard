'use server'

import { getTranslations } from 'next-intl/server';

import supabase from "../supabase/supabase.config";

import { verifyPassword } from '../lib/hashPassword';

import { deleteCookie, generateToken, setCookie } from '../lib/cookie';

import { redirect } from 'next/navigation';


export default async function loginUser(formData, locale) {
    const t = await getTranslations('Authenticate');
    const { email, password } = formData;

    try {
        const { data: user } = await supabase
            .from("users")
            .select("email, password")
            .eq("email", email)
            .single();

        if (!user) return { error: t('serverSideErrorNoUser') }

        const isPasswordValid = await verifyPassword(password, user.password);

        if (!isPasswordValid) return { error: t('serverSideErrorPasswordNotValid') }

        await deleteCookie("token");

        const newToken = generateToken();

        const token = await setCookie("token", newToken, {
            httpOnly: true,
            secure: true,
            path: "/",
            maxAge: 7 * 24 * 60 * 60,
            sameSite: "strict",
        });

        const updatedUser = await supabase
            .from("users")
            .update({ token })
            .eq("email", email);

    } catch (error) {
        console.log(error);
        return { error: t('serverSideError') }
    }

    redirect("/");
}