import React, { useState, useEffect } from 'react';
import BookSearch from './BookSearch';

function App() {
  // データを保存するための状態（state）
  const [data, setData] = useState([]);

  // コンポーネントがマウントされた時にデータを取得
  //useEffect(() => {
  //  fetchData();
  //}, []);

  // APIからデータを取得する関数
  //const fetchData = async () => {
  //  try {
  //    const response = await fetch('https://bookserch.azurewebsites.net/api/GetBookCollection?title=&isbn=&author=&publisherName=&salesDate=&volume=&box_no=1');
  //    const jsonData = JSON.parse(await response.json());
  //    //console.log(jsonData);  // データをコンソールで確認
  //    setData(Object.values(jsonData));
  //  } catch (error) {
  //    console.error("データの取得に失敗しました:", error);
  //  }
  //};

  //return (
  //  <div>
  //    <h1>データ一覧</h1>
  //    <ul>
  //      {data.map(item => (
  //        <li key={item.isbn}>{item.title}</li> // ここでデータを表示
  //      ))}
  //    </ul>
  //  </div>
  //);

  return (
    <div className="App">
      <h1>ファイルドロップデモ</h1>
      <BookSearch /> {/* ここでFileDropコンポーネントを使用 */}
    </div>
  );
}

export default App;
