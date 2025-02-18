import BeforeAfterCard from './BeforeAfterCard'
import BgImage1 from '../../../public/img/review_image_01.png'
import BgImage2 from '../../../public/img/review_image_02.png'
import BgImage3 from '../../../public/img/review_image_03.png'
import BgImage4 from '../../../public/img/review_image_04.png'
import BgImage5 from '../../../public/img/review_image_05.png'
import BgImage6 from '../../../public/img/review_image_06.png'
import BgImage7 from '../../../public/img/review_image_07.png'
import BgImage8 from '../../../public/img/review_image_08.png'

const beforeAfterData = [
    {
        title: '시스루뱅 + 브라운 염색',
        designer: '박지민 원장님',
        rating: 4.7,
        review: '🫶 와... 진짜 대박!! 인스타에서 본 그 스타일 그~대로에요😍 앞머리 시스루뱅 고민하다가 박원장님께 맡겼는데 제 얼굴형이랑 완전 찰떡이에요ㅠㅠ 거기다 염색도 톤 하나하나 섬세하게 잡아주셔서 제가 원하던 그 애쉬브라운이 나왔어요💕 원장님 손길 진짼ㅋㅋㅋ 이제 여기서 탈출 못할듯요...👀 #인생미용실 #찾았다',
        bgImg: BgImage1,
    },
    {
        title: '단발병 극복했어요...!! 🎀',
        designer: '최유진 디자이너님',
        rating: 4.8,
        review: '제발 단발병 좀 고치고 싶어서 방문했는데요... 상담할 때부터 제 고민 완전 공감해주시면서 레이어드 커트로 예쁘게 잘라주셨어요🥹 거울 보자마자 소리 질렀다는...ㅋㅋㅋㅋ 이제야 제 얼굴에 맞는 스타일 찾은 것 같아서 너무 행복해요!! 게다가 스타일링 꿀팁도 알려주셔서 집에서도 쉽게 연출 가능합니당💅 역시 믿고 맡기는 게 최고인듯..!!',
        bgImg: BgImage2,
    },
    {
        title: '숱많고 곱슬인 모발 극복기✨',
        designer: '이하은 원장님',
        rating: 4.5,
        review: '제 곱슬곱슬한 머리 때문에 항상 고민이었는데... 하은원장님께서 매직이랑 c컬 펌 섞어서 너무 예쁘게 해주셨어요!! 정말 제 머리가 맞나 싶을 정도로 달라졌어요ㅜㅜ 거기다 모발 관리법도 꼼꼼하게 설명해주시고... 진작 올걸 그랬어요!! 주변 언니들한테도 추천했더니 다들 예약했다는...😆 #대박미용실 #인생미용실 #꿀팁대방출',
        bgImg: BgImage3,
    },
    {
        title: '탈색 3번의 흔적...!!!',
        designer: '김도연 디자이너님',
        rating: 4.2,
        review: '제가 원하는 밀크티베이지 하고 싶어서 방문했는데요!! 도연쌤이 3번에 걸쳐서 차근차근 탈색해주시고ㅠㅠ 중간중간 트리트먼트도 듬뿍 발라주셔서 모발 손상 거의 없이 염색 성공했어요🎉 친구들이 미용실 어디냐고 성가시게 물어볼 정도로 찰떡이에요!! 이제 평생 여기만 다닐 거 같아요...❤️ #인생컬러 #찾았닭',
        bgImg: BgImage4,
    },
    {
        title: '옴브레 그라데이션의 신세계✨',
        designer: '강민지 원장님',
        rating: 4.9,
        review: '진짜 이런 거 처음 써보는데 너무 감동이라...😭 제 머리가 이렇게 예뻐질 수 있다니...!! 인스타에서 본 옴브레 머리 해보고 싶어서 도전했는데 민지원장님이 너무 완벽하게 해주셨어요🫶 머리 손상될까 걱정했는데 중간중간 영양케어 해주셔서 윤기가 장난아님!! 친구들이 다 어디서 했냐고 물어보는 중ㅋㅋㅋ 이제 평생 단골각이에요...💘 #인생미용실 #옴브레여신',
        bgImg: BgImage5,
    },
    {
        title: '숏컷 과감한 변신!',
        designer: '정수진 디자이너님',
        rating: 4.4,
        review: '드라마에서 본 숏컷 스타일 도전했어요!! 처음엔 겁나서 망설였는데 수진쌤이 제 얼굴형이랑 잘 어울릴 거라고...💪 진짜 결과보고 소리질렀어요ㅋㅋㅋㅋ 이렇게 시원하고 예쁠 줄 몰랐네요🥹 거기다 앞머리 웨이브 스타일링하는 법도 친절하게 알려주셔서 아침마다 예쁘게 하고 다닐 수 있을 것 같아요!! 역시 전문가 손길이 다르네요... #숏컷여신 #변신성공',
        bgImg: BgImage6,
    },
    {
        title: '레이어드 히피펌 성공기💫 ',
        designer: '윤서연 원장님',
        rating: 4.7,
        review: '서연쌤한테 히피펌 받고 인생이 바뀌었어요...!! 제 얼굴형이랑 너무 잘 어울리게 레이어드 커트해주시고, 자연스러운 히피펌으로 아침에 드라이 살짝만 해도 예쁘게 떨어져요😍 거기다 모근 볼륨도 완전 예쁘게 살려주셔서 날씬해보이는 효과까지!! 진작 알았더라면 더 일찍 왔을텐데... 이제 평생 여기만 다닐 거예요❤️ #인생펌 #꾸안꾸여신',
        bgImg: BgImage7,
    },
    {
        title: '미용실 트러블 극복기🎀 ',
        designer: '한소희 디자이너님',
        rating: 4.8,
        review: '다른 미용실에서 망한 염색 때문에 엄청 고민하다가 방문했어요ㅠㅠ 소희쌤이 제 모발 상태 꼼꼼히 체크하시고 복구 플랜 세워주셨는데... 진짜 천사세요😇 중간중간 트리트먼트 듬뿍 발라주시고 모발 영양관리까지!! 덕분에 윤기나는 건강한 머리로 돌아왔어요✨ 거기다 염색도 제가 원하던 톤 그대로라서 완전 감동... 이제 다른 미용실 안가요!! #머리구원 #인생미용실',
        bgImg: BgImage8,
    },
]

export default function BeforeAfterSection() {
    return (
        <section className='flex flex-col items-start px-4 gap-14'>
            <span className='font-bold text-black text-body1'>
                디자인 포트폴리오
            </span>
            <div className='flex w-screen gap-12 -ml-20 overflow-x-scroll'>
                <div className='w-8'></div>
                {beforeAfterData.map((card) => (
                    <BeforeAfterCard {...card} />
                ))}
                <div className='w-8'></div>
            </div>
        </section>
    )
}
