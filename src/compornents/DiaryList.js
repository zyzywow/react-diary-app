import DiaryItem from "./DiaryItem";

export default function DiaryList({ diaryList, deleteDiary, modifyDiary }) {
  console.log(diaryList);
  const total = diaryList.length;
  return (
    <>
      <div className="diaryList">
        <div className="container">
          <div className="titleBox">
            <h2>diary list</h2>
            <p className="total">{total}개의 일기가 있습니다.</p>
          </div>
          <ul className="list">
            {diaryList.map((item, idx) => {
              console.log({ ...item });
              // return <DiaryItem key={idx} diaryInfo={item} />;
              return <DiaryItem key={idx} {...item} deleteDiary={deleteDiary} modifyDiary={modifyDiary} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
