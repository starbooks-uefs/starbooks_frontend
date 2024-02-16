import React, { MouseEventHandler } from 'react'
import SkyButton from './SkyButton'

type passwordCardProps = {
    className?: string,
    onButtonClick?: MouseEventHandler,
}

function PasswordCard({ className, onButtonClick }: passwordCardProps) {
    return (
        <div className={`${className ?? ""}`}>
            <div className="ml-10  mt-3 rounded-lg shadow border border-neutral-600 w-96 h-40">
                <div className=" font-semibold p-3">
                    <label className="text-sm">Senha</label>
                    <p className="text-sm text-gray-500">*****************************</p>
                </div>

                <div className="float-right mt-10 mr-3">
                    <SkyButton onClick={onButtonClick} text="Alterar"></SkyButton>
                </div>
            </div>
        </div>
    )
}

export default PasswordCard