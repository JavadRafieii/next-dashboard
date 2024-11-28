'use client'

import { useState } from 'react';

import { useTranslations } from 'next-intl';
import { Link } from '../i18n/routing';

import { useForm } from "react-hook-form";

import auth from '../actions/auth';

import { ClipLoader } from 'react-spinners';


export default function Form({ locale, mode = "register" }) {
    const t = useTranslations('Authenticate');

    const [serverSideError, setServerSideError] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let inputClasses = "w-full h-[45px] rounded-lg px-5 outline-none border border-inputs-line focus:shadow-inputs-shadow text-white text-base bg-inputs";

    async function onSubmit(data) {
        setIsLoading(true);
        const serverError = await auth(mode, locale, data);
        setIsLoading(false);
        setServerSideError(serverError);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-3'>
                {!(mode === "login") &&
                    (
                        <div>
                            <input
                                {...register("fullname", {
                                    required: t('requiredName'),
                                    minLength: {
                                        value: 4,
                                        message: t('minlengthName'),
                                    },
                                })}
                                placeholder={t('fullName')}
                                className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} ${inputClasses} ${errors?.fullname?.message && 'outline-1 outline-red-500'}`} />
                            <span className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} text-sm text-red-500 block mt-2`}>{errors?.fullname?.message && errors.fullname.message}</span>
                        </div>
                    )
                }
                <div>
                    <input
                        {...register("email", {
                            required: t('requiredEmail'),
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: t('patternEmail'),
                            },
                        })}
                        placeholder={t('email')}
                        className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} ${inputClasses} ${errors?.email?.message && 'outline-1 outline-red-500'}`} />
                    <span className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} text-sm text-red-500 block mt-2`}>{errors?.email?.message && errors.email.message}</span>
                </div>
                <div>
                    <input
                        {...register("password", {
                            required: t('requiredPassword'),
                            minLength: {
                                value: 8,
                                message: t('minlengthPassword'),
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: t('patternPassword'),
                            },
                        })}
                        placeholder={t('password')}
                        className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} ${inputClasses} ${errors?.password?.message && 'outline-1 outline-red-500'}`} />
                    <span className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} text-sm text-red-500 block mt-2`}>{errors?.password?.message && errors.password.message}</span>
                </div>
                <div>
                    <span className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} text-sm text-red-500 block mt-2`}>{serverSideError?.error && serverSideError.error}</span>
                </div>
                <div>
                    {isLoading ?
                        <div className='flex justify-center'>
                            <ClipLoader color='#fff' width={5} height={30} />
                        </div> :
                        <button type="submit" className={`${locale === "en" ? 'font-Roboto-Bold' : 'font-IranSans-Bold'} w-full h-[45px] rounded-lg bg-buttons hover:bg-buttons-hover text-white border border-buttons-line`}>
                            {mode === "register" ? t('register') : t('login')}
                        </button>
                    }

                    {mode === "register" &&
                        <Link href="/authenticate?mode=login" className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} text-white text-base text-center mt-5 block underline decoration-line`}>
                            {t('loginMode')}
                        </Link>
                    }
                    {mode === "login" &&
                        <Link href="/authenticate?mode=register" className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} text-white text-base text-center mt-5 block underline decoration-line`}>
                            {t('createMode')}
                        </Link>
                    }
                </div>
            </div>
        </form>
    );
}