
export default function Home() {
  return (
    <>
      <nav className="headerContainer">
        <div className="header-wrapper flex-row">
          <ul><div className="logo"></div>광교연세피부과</ul>
          <ul>공지사항</ul>
          <ul>진료시간안내</ul>
          <ul>의료진 소개</ul>
          <ul>오시는길</ul>
        </div>
      </nav>
    
      <section id="clinic-time" className="h-v-center">
          <div className="clock"></div>
          <h2>진료시간</h2>

          <div className="timetable-wrapper v-center">
            <h3>월요일, 목요일</h3>
            <h3>오전 9:30 ~ 오후 6:30</h3>
          </div>
          <div className="timetable-wrapper v-center">
            <h3>수요일</h3>
            <h3>오전 9:30 ~ 오후 1:00</h3>
          </div>
          <div className="timetable-wrapper v-center">
            <h3>화요일, 금요일</h3>
            <h3>오전 9:30 ~ 오후 7:30</h3>
          </div>
          <div className="timetable-wrapper v-center">
            <h3>토요일</h3>
            <h3>오전 9:00 ~ 오후 2:30</h3>
          </div>

          <div className="time-info-wrapper">
            <h3 className="orange-text">점심시간 : 오후 1:00 ~ 오후 2:00</h3>
            <h3>대기 고객님이 많을 경우 진료종료시간 기준으로 2시간전에 접수가 마감 될 수 있으며, 토요일 및 공휴일 전후는 접수가 더 일찍 마감될 수 있습니다. 접수마감에 대한 문의사항은 내원 전 병원으로 전화 부탁드립니다</h3>
          </div>

      </section>
    
    </>
  );
}
