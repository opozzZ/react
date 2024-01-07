import React, { useState } from 'react';

const BookSearch = () => {
  const [input, setInput] = useState({
    title: '',
    isbn: '',
    author: '',
    publisherName: '',
    salesDate: '',
    volume: '',
    box_no: ''
  });
  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(input).toString();
    const response = await fetch(`https://bookserch.azurewebsites.net/api/GetBookCollection?${queryParams}`);
    const data = JSON.parse(await response.json());
    setBooks(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* フォームの各入力フィールドを作成 */}
        <input type="text" name="title" value={input.title} onChange={handleChange} placeholder="Title" />
        {/* 他のフィールドも同様に追加 */}
        <button type="submit">Search</button>
      </form>

      {/* 結果の表示 */}
      <div>
        {books.map((book, index) => (
          <div key={index}>
            <p>{book.title}</p>
            {/* 他の情報も表示 */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
