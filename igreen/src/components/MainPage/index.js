import './style.css';

function MainPage() {
  const mv2category = () => {
    document.location.href = '/category';
  };
  const mv2detail = () => {
    document.location.href = '/detail';
  };
  const mv2mypage = () => {
    document.location.href = '/mypage';
  };

  return (
    <div>
      <div> 메인 페이지</div>
      <button onClick={mv2category}> 제품 카테고리 페이지 </button>
      <button onClick={mv2detail}> 제품 상세 페이지</button>
      <button onClick={mv2mypage}> 마이페이지 </button>
    </div>
  );
}

export default MainPage;
