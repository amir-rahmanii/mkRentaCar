import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

export default function CopyRight() {
  //translate
  const { t } = useTranslation()
  return (
    <div className={`bg-black font-light py-5 ${i18n.language === "ar" ? "rtlArabic" : ''}`}>
      <div className='container'>
        <p className='text-sm/[21px] text-[#7A8395]'>© {t("Copyright 2023. All Right Reserved")} </p>
      </div>
    </div>
  )
}
