import { useRef, useState } from "react";

export default function DiaryEditor({ insertDiary }) {
  // const [writer, setWriter] = useState("");
  // const [contents, setContents] = useState("");
  // const [emotion, setEmotion] = useState(1);
  const writerRef = useRef();
  const contentsRef = useRef();

  const [diaryItem, setDiaryItem] = useState({
    writer: "가나다",
    contents: "내용이 들어갑니다.",
    emotion: 1,
  });
  const insertDiaryItem = function () {
    // console.log(diaryItem.writer);
    // console.log(diaryItem.contents);
    // console.log(diaryItem.emotion);
    if (diaryItem.writer.length < 3) {
      alert("글쓴이는 최소 3글자 이상이어야 합니다.");
      writerRef.current.focus();
      return false;
    } else if (diaryItem.contents.length < 10) {
      alert("내용은 최소 10글자 이상이어야 합니다.");
      contentsRef.current.focus();
    }
    // 자식이 부모에게 데이터 전달하는 방법..
    insertDiary(diaryItem.writer, diaryItem.contents, diaryItem.emotion);
    alert("일기가 저장되었습니다.");
    setDiaryItem({
      writer: "",
      contents: "",
      emotion: 1,
    });
  };

  // const changeWriter = function (e) {
  //   setWriter(e.target.value);
  //   // console.log(e.target.value);
  // };
  // const changeContents = function (e) {
  //   setContents(e.target.value);
  //   // console.log(e.target.value);
  // };
  // const changeEmotion = function (e) {
  //   setEmotion(e.target.value);
  //   // console.log(e.target.value);
  // };
  const changeDiaryItem = function (e) {
    console.log(e.target.name);

    setDiaryItem({
      ...diaryItem,
      // obj형태로 만들어 복제해 흩뿌린다음 (흩뿌리지않고 값을변경시키면,
      // 동일하게변경되기 때문에) 변하는 값만 current.target으로 수정
      // e.target.name -> key값은 단어만 올수 있는데 []안에넣으면 value값도사용가능
      [e.target.name]: e.target.value,
    });
  };
  const testObj = { name: "장동건", age: "30", weight: "90" };
  console.log(testObj);
  // console.log(testObj["name"]);

  const spreadObj = { ...testObj };
  console.log(spreadObj);

  return (
    <div className="container">
      <div className="section">
        <input
          type="text"
          value={diaryItem.writer}
          name="writer"
          placeholder="이름을 입력해주세요."
          onChange={changeDiaryItem}
          ref={writerRef}
        />
      </div>
      <div className="contents section">
        <textarea
          name="contents"
          id=""
          cols="30"
          rows="10"
          value={diaryItem.contents}
          onChange={changeDiaryItem}
          ref={contentsRef}
          placeholder="내용을 입력해주세요."
        ></textarea>
      </div>
      <div className="section">
        <label>오늘 하루 어땠나요?</label>
        <select
          name="emotion"
          id=""
          value={diaryItem.emotion}
          onChange={changeDiaryItem}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {/* <label>
          <span>좋아요</span>
          <input type="radio" name="emotion" value="1" id="" checked />
          <span>나빠요</span>
          <input type="radio" name="emotion" value="2" id="" />
          <span>슬퍼요</span>
          <input type="radio" name="emotion" value="3" id="" />
          <span>기뻐요</span>
          <input type="radio" name="emotion" value="4" id="" />
          <span>화나요</span>
          <input type="radio" name="emotion" value="5" id="" />
        </label> */}
      </div>
      <div className="btns section">
        <button className="btn btnSave" onClick={insertDiaryItem}>
          SAVE
        </button>
      </div>
    </div>
  );
}
