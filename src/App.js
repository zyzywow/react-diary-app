import "./App.css";
import "./css/layout.css";
import Header from "./compornents/Header";
import Footer from "./compornents/Footer";
import DiaryEditor from "./compornents/DiaryEditor";

function App() {
  const insertDiary = function (writer, contents, emotion) {
    console.log("wirter===", writer);
    console.log("contents===", contents);
    console.log("emotion===", emotion);
  };
  return (
    <div className="App">
      <Header />
      <DiaryEditor insertDiary={insertDiary} />
      <Footer />
    </div>
  );
}

export default App;
