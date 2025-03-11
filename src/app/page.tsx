import { useState } from 'react'
import '../App.css'
import BodyText from '../components/BodyText'
import BodyTextEdit from '../components/BodyTextEdit'

const EventDetail = () => {
    const [bodyDescriptionContent, setBodyDescriptionContent] = useState("eventDescription");
    const [bodyTypeContent, setBodyTypeContent] = useState("eventType");
    const [bodyUrlContent, setBodyUrlContent] = useState("eventUrl");
    const [bodyBackpressureContent, setBodyBackpressureContent] = useState("queueBackpressure");

    return (
        <div className='w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] h-full mx-auto  py-[50px]'>
            <div className='flex flex-col text-[32px] text-gray-700 font-extrabold mb-10'>
                이벤트 상세
            </div>
            <div className='flex flex-col w-full mx-auto justify-center py-8 px-12 bg-white rounded-xl border-[0.3px] border-[#B9B9B9]'>
                <div className='text-gray-700 font-semibold text-[24px]'>
                    이벤트 명
                </div>
                <div className='text-black text-[18px] mt-2'>
                    eventName
                </div>
            </div>
            <div className='flex flex-col w-full mx-auto justify-center p-12 bg-white rounded-xl border-[0.3px] border-[#B9B9B9] mt-8'>
                <BodyTextEdit TitleContent="이벤트 설명" BodyContent={bodyDescriptionContent} setBodyContent={setBodyDescriptionContent} />
                <BodyTextEdit TitleContent="이벤트 유형" BodyContent={bodyTypeContent} setBodyContent={setBodyTypeContent} />
                <BodyTextEdit TitleContent="이벤트 Url" BodyContent={bodyUrlContent} setBodyContent={setBodyUrlContent} />
                <BodyTextEdit TitleContent="큐 백프래셔 수치" BodyContent={bodyBackpressureContent} setBodyContent={setBodyBackpressureContent} />
                <div className='flex flex-row w-full items-center'>
                    <div className='w-1/2'>
                        <BodyText TitleContent="이벤트 시작 일자" BodyContent="eventStartTime" />
                    </div>
                    <div className='w-1/2'>
                        <BodyText TitleContent="이벤트 종료 일자" BodyContent="eventEndTime" />
                    </div>
                </div>
                <div className='flex flex-row w-full items-center'>
                    <div className='w-1/2'>
                        <BodyText TitleContent="이벤트 생성자" BodyContent="createdBy" />
                    </div>
                    <div className='w-1/2'>
                        <BodyText TitleContent="이벤트 생성 일자" BodyContent="createdAt" />
                    </div>
                </div>
                <div className='flex flex-row w-full items-center'>
                    <div className='w-1/2'>
                        <BodyText TitleContent="이벤트 수정자" BodyContent="updatedBy" />
                    </div>
                    <div className='w-1/2'>
                        <BodyText TitleContent="이벤트 수정 일자" BodyContent="updatedBy" />
                    </div>
                </div>
            </div>
            <button className='px-12 py-6 bg-white text-gray-500 text-xl font-normal'>
                취소
            </button>
        </div>
    )
}

    export default EventDetail;