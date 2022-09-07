// --------------- diaryInfo로 모든내용 여기로한번에보내서 .writer처럼 하나씩 입력하기

import { useRef, useState } from "react";

// export default function DiaryItem({ diaryInfo }) {
//   return (
//     <li className="diaryItem">
//       <div className="info">
//         <dl>
//           <dt>글쓴이</dt>
//           <dd>{diaryInfo.writer}</dd>
//         </dl>
//         <dl>
//           <dt>오늘의 기분</dt>
//           <dd>{diaryInfo.emotion}</dd>
//         </dl>
//         <dl>
//           <dt>날짜</dt>
//           <dd>{new Date(diaryInfo.date).toLocaleString()}</dd>
//         </dl>
//         <div className="btns">
//           <button>done</button>
//           <button>close</button>
//         </div>
//       </div>
//       <div className="contents">{diaryInfo.contents}</div>
//     </li>
//   );
// }

// ------------------------- DiaryList에서 ...흩뿌려서보낸다음 하나씩바로입력
export default function DiaryItem({ writer, contents, id, date, emotion, deleteDiary, modifyDiary }) {
  const [isEdit, setIsEdit] = useState(false);
  const [localContents, setLocalContents] = useState(contents);
  const [localEmotion, setLocalEmotion] = useState(emotion);
  const contentsRef = useRef();

  return (
    <li className="diaryItem">
      <div className="info">
        <dl>
          <dt>글쓴이</dt>
          <dd>{writer}</dd>
        </dl>
        <dl>
          <dt>오늘의 기분</dt>
          <dd>{emotion}</dd>
        </dl>
        <dl>
          <dt>날짜</dt>
          <dd>{new Date(date).toLocaleString()}</dd>
        </dl>
        <div className="btns">
          {isEdit ? (
            <>
              <button
                className="btn"
                onClick={function () {
                  if (localContents.length < 10) {
                    alert("내용은 10글자 이상이어야 합니다.");
                    contentsRef.current.focus();
                    return;
                  }
                  modifyDiary(id, localContents, localEmotion);
                  setIsEdit(false);
                }}
              >
                <span className="material-icons">done</span>
              </button>
              <button
                className="btn"
                onClick={function () {
                  setIsEdit(false);
                }}
              >
                <span className="material-icons">close</span>
              </button>
            </>
          ) : (
            <>
              <button
                className="btn"
                onClick={function () {
                  setIsEdit(true);
                  setLocalContents(contents);
                }}
              >
                <span className="material-icons">edit</span>
              </button>
              <button
                className="btn"
                onClick={() => {
                  if (window.confirm(`${id + 1}번째 다이어리를 지우겠습니까?`)) {
                    deleteDiary(id);
                  }
                }}
              >
                <span className="material-icons">delete</span>
              </button>
            </>
          )}
        </div>
      </div>
      {isEdit ? (
        <>
          <textarea
            ref={contentsRef}
            value={localContents}
            onChange={(e) => {
              setLocalContents(e.target.value);
            }}
          ></textarea>
        </>
      ) : (
        <div className="contents">{contents}</div>
      )}
      {isEdit ? (
        <>
          {/* <textarea
            ref={contentsRef}
            value={localContents}
            onChange={(e) => {
              setLocalContents(e.target.value);
            }}
          ></textarea> */}
          <label>오늘 하루 어땠나요?</label>
          <select
            name="emotion"
            ref={contentsRef}
            value={localEmotion}
            onChange={(e) => {
              setLocalEmotion(e.target.value);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </>
      ) : (
        <></>
      )}
    </li>
  );
}
