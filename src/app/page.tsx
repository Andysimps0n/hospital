
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
    
      <section id="clinic-time" className="border h-v-center">
          <div className="clock"></div>
          <h2>진료시간</h2>
      </section>
    
    </>
  );
}
