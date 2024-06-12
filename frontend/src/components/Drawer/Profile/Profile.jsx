import React, { useContext } from 'react'
import "./Profile.scss"

import EditIcon from '@mui/icons-material/Edit';

import { AccountContext } from '../../../context/AccountProvider';

const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <div className='profile'>
            <div className="profile__img">
                <img src={account.picture} alt="" />
            </div>
            <div className="profile__info">
                <h6>Tên bạn</h6>
                <div className="profile__info__edit">
                    <span>{account.name}</span>
                    <EditIcon className='profile__info__edit__icon' />
                </div>
            </div>
            <p className='profile__notice'>
                Đây không phải là tên người dùng hoặc mã PIN của bạn. Tên  này sẽ
                hiển thị với những người liên hệ khác trên WhatsApp.
            </p>
            <div className="profile__introduce">
                <h6>Giới thiệu</h6>
                <div className="profile__introduce__edit">
                    <p>Xin chào! Mình đang dùng WhatsApp nè.</p>
                    <EditIcon className='profile__introduce__edit__icon' />
                </div>
            </div>
        </div>
    )
}

export default Profile