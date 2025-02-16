//디자이너 상세 페이지(예약 정보 입력 페이지)

import React from 'react'
import DesignerInfo from '../../components/designerDetail/DesignerInfo'
import Reservation from '../../components/designerDetail/Reservation'
import Divider from '../../components/designerDetail/Divider'
import ButtonLg from '../../components/designerDetail/ButtonLg'

const DesignerDetail: React.FC = () => {
    return (
        <div className='relative min-h-screen w-screen flex-auto flex-col items-center justify-center bg-white'>
            <img
                src='http://localhost:5173/img/Banner.png'
                alt='designer'
                className='h-2/5 w-full object-cover'
            />

            <div className='relative z-10 -mt-20 w-full flex-auto rounded-t-2xl bg-white pb-10 shadow-md'>
                <DesignerInfo />
                <Divider />
                <Reservation />
                <Divider />
                {/*  비포 애프터 */}
                <ButtonLg text='예약' />
            </div>
        </div>
    )
}

export default DesignerDetail
