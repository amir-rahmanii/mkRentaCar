import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import Modal from '../../Component/Admins/Modal/Modal'
import AuthContext from '../../Context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa';

export default function PanelUserWallet() {
    const [showChargeWallet, setShowChargeWallet] = useState(false)
    const [rechargeValue, setRechargeValue] = useState(0)
    const [messageErrorCharge, setMessageErrorCharge] = useState(false)
    //context
    const authContext = useContext(AuthContext)
    //translate
    const { t } = useTranslation()

    //Toast
    const notify = () => {
        toast('Wallet Recharged successfully , After three seconds, the page will reload!', {
            icon: <FaCheckCircle color="green" />,
            type: 'success',
            theme: 'dark'
        });
    }

    const rechargeHandler = () => {
        if (/^[1-9][0-9]{0,5}$/i.test(rechargeValue)) {
            setMessageErrorCharge(false)
            fetch(`https://mkrentacar.liara.run/users/${authContext.userInfo[0].id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    wallet: Number(authContext.userInfo[0].wallet) + Number(rechargeValue)
                })
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json()
                })
                .then(result => {
                    setShowChargeWallet(false)
                    notify()
                    setTimeout(() => {
                        window.location.href = "/paneluser/Wallet"
                    }, 3000);
                })
                .catch(error => console.error('There has been a problem with your fetch operation:', error));
        } else {
            setMessageErrorCharge(true)
        }
    }

    return (
        <>
            <div div className='p-4 my-2 text-[16px] md:text-[25px]'>
                <p>{t("Wallet balance")} : <span className='text-orangeCus2 p-2 font-bold'> {authContext.userInfo[0].wallet.toLocaleString()} AED</span></p>
                <button onClick={() => setShowChargeWallet(true)} className='bg-green-700 rounded-md p-2 mt-8'><span className='text-white p-2 font-bold'>{t("Recharge the wallet")}</span></button>
            </div>

            {/* notfy */}
            <ToastContainer />

            {/* is Recharge Wallet */}
            <Modal width="w-[400px]" height="h-auto" closedBox={showChargeWallet} setClosedBox={setShowChargeWallet} title={`Recharge Wallet`}>
                <p className={`text-[20px] mt-5 ${i18n.language === "ar" ? "rtlArabic" : ''}`}>{t("Enter the amount")}.</p>
                <input onChange={(e) => {
                    setRechargeValue(e.target.value)
                }} type="text" value={rechargeValue} className='outline-none p-2 rounded-md text-black mt-2' placeholder='amount' />
                {messageErrorCharge && (
                    <p className='text-red-600 font-medium mt-1'>{t("Please enter the correct values (1 , 999999)")}</p>
                )}
                <div className='flex gap-4 mt-5'>
                    <button onClick={rechargeHandler} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
                        Yes
                    </button>
                </div>
            </Modal>
        </>
    )
}
