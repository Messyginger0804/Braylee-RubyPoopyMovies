import { Modal } from '@mui/material'
import React, { useState } from 'react'
import MyModal from '../MyModal'

function LoginRegister() {
    const [showModal, setShowModal] = useState(true);
    return (
        <div className='flex justify-center'>
            <MyModal isVisible={showModal}>
                onClose={setShowModal(false)}
            </MyModal>
        </div>
    )
}

export default LoginRegister