import { useState, useEffect } from 'react';
import axios from 'axios';

const Hello = () => {
  const [message, setMessage] = useState<string>(''); // メッセージを格納するstate

  // コンポーネントがマウントされた際に実行される
  useEffect(() => {
    // Axiosを使用してGETリクエストを送信
    axios
      .get('http://localhost:8080/api/hello') // バックエンドのAPIエンドポイント
      .then((response) => {// 成功時の処理
        setMessage(response.data); // レスポンスのデータをstateに保存（returnできたやつ）
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []); // 空の依存配列で最初の1回のみ実行

  return (
    <div>
      <h1>{message}</h1> {/* 取得したメッセージを表示 */}
    </div>
  );
};

export default Hello;
