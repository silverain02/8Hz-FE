import ChatIcon from '../../../public/img/chat.svg'
import CheckIcon from '../../../public/img/check.svg'
import Profile from './Profile'
import Category from './Category'
import { Link } from 'react-router-dom'

export type CategoryType = '직접' | '온라인' | '염색' | '탈염색' | '펌'

interface Props {
    designer: string
    tag: CategoryType[]
    reservationRate: number
    reviewCount: number
    profileImg: string
}

export default function HotNewCard({
    designer,
    tag,
    reservationRate,
    reviewCount,
    profileImg,
}: Props) {
    return (
        <Link
            to='/designerdetail'
            className='mb-45 mt-14 flex h-[223px] w-150 shrink-0 flex-col items-center gap-13 overflow-hidden rounded-8 border-[#eeeeee] bg-gray-100 py-18 shadow-[0_1px_12px_rgba(0,0,0,0.08)]'>
            <Profile size='lg' imgUrl={profileImg} />
            <div className='flex flex-col items-center gap-2'>
                <span className='font-semibold text-black text-body1'>
                    {designer}
                </span>
                <div className='flex gap-4'>
                    {tag
                        .filter((t) => t === '직접' || t == '온라인')
                        .map((t) => (
                            <Category value={t} />
                        ))}
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='flex gap-2'>
                    <img src={CheckIcon} alt='체크 아이콘' />
                    <span className='text-body2 text-[#808080]'>
                        예약률 {reservationRate}%
                    </span>
                </div>
                <div className='flex gap-2'>
                    <img src={ChatIcon} alt='챗 아이콘' />
                    <span className='text-body2 text-[#808080]'>
                        리뷰 {reviewCount}
                    </span>
                </div>
            </div>
        </Link>
    )
}
