import React from 'react'
import Button from '../Button/Button'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

export default function LuxuryCar() {

    //translate
    const { t } = useTranslation()

    return (
        <div className="luxuryCars bg-[center_top] w-full h-[200px] xs:h-[500px] aspect-[2/1] bg-no-repeat bg-cover text-black font-medium">
            <div className='hidden md:flex flex-col justify-center items-center gap-[150x] pt-14'>
                <p className='text-[40px]/[48px] font-bold pb-2.5'>{t("Rent a Luxury Car in Dubai")}</p>
                <p className={`pb-2.5 ${i18n.language === "ar" ? "font-bold" : "font-medium"}`}>{t("At Masterkey, we understand that driving is more than just a means of transportation; it's a passion")}</p>
                <Button link='/all-cars' classes='bg-neutral-700 px-5 text-base/[45px] tracking-[1px]'>
                    <span>{t("SEND INQUIRY NOW")}</span>
                </Button>
            </div>
        </div>
    )
}
