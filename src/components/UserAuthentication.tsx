"use client"

import React from 'react'
import FormChangePassword from "@/components/FormChangePassword";
import PasswordCard from "@/components/PasswordCard";
import { useState } from "react";

const display = {
    show: 'block',
    hidden: 'hidden'
};

function UserAuthentication() {
    const [manageDisplayPasswordCard, setManageDisplayPasswordCard] = useState<string>(display.show)
    const [manageFormChangePassword, setFormChangePassword] = useState<string>(display.hidden)

    function onAlterClick() {
        setManageDisplayPasswordCard(display.hidden)
        setFormChangePassword(display.show)
    }

    function onCancelClick() {
        setManageDisplayPasswordCard(display.show)
        setFormChangePassword(display.hidden)
    }

    function onChangePassword() {
        setManageDisplayPasswordCard(display.show)
        setFormChangePassword(display.hidden)

    }


    return (
        <div>
            <PasswordCard className={manageDisplayPasswordCard} onButtonClick={onAlterClick}></PasswordCard>
            <FormChangePassword className={manageFormChangePassword} onChangePassword={onChangePassword} onClickButtonCancel={onCancelClick}></FormChangePassword>
        </div>
    );
}

export default UserAuthentication