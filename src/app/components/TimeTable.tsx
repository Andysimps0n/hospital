'use client'
import { useState, useEffect } from "react";

const TimeTable = () => {

  const [today, setToday] = useState('')

  useEffect(()=>{
    const dateObj = new Date()
    const today = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    setToday(today)

    
    
  },[])
  

  useEffect(()=>{
    console.log(isActive(['Tuesday']) ? "yes" : "no")
  },[today])


  
  const isActive = (days : string[]) => {
    return days.includes(today)
  }
  return (
    <section id="clinic-time" className="h-v-center">
        <div className="clock"></div>
        <h2>진료시간</h2>

        <div className="timetable-wrapper v-center">
        <h3 className={isActive(['Monday','Thursday']) ? "date-bold" : ""}>월요일, 목요일</h3>
        <h3>오전 9:30 ~ 오후 6:30</h3>
        </div>

        <div className="timetable-wrapper v-center">
        <h3 className={isActive(['Wendsday']) ? "date-bold" : ""}>수요일</h3>
        <h3>오전 9:30 ~ 오후 1:00</h3>
        </div>

        <div className="timetable-wrapper v-center">
        <h3 className={isActive(['Tuesday','Friday']) ? "date-bold" : ""}>화요일, 금요일</h3>
        <h3>오전 9:30 ~ 오후 7:30</h3>
        </div>

        <div className="timetable-wrapper v-center">
        <h3 className={isActive(['Saturday']) ? "date-bold" : ""}>토요일</h3>
        <h3>오전 9:00 ~ 오후 2:30</h3>
        </div>

        <div className="time-info-wrapper">
        <h3 className="orange-text">점심시간 : 오후 1:00 ~ 오후 2:00</h3>
        <h3>대기 고객님이 많을 경우 진료종료시간 기준으로 2시간전에 접수가 마감 될 수 있으며, 토요일 및 공휴일 전후는 접수가 더 일찍 마감될 수 있습니다. 접수마감에 대한 문의사항은 내원 전 병원으로 전화 부탁드립니다</h3>
        </div>
    </section>
  );
};

export default TimeTable;