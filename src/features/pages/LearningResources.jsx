function LearningResources() {
  return (
    <>
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#27374D]">学習教材</h2>
          <p className="mt-2 text-sm leading-7 text-[#526D82]">
            以下のUdemy講座を活用しながら、ReactだけでなくJavaScriptやHTML/CSS、Node.jsまで基礎から学習しました。
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="https://www.udemy.com/course/the-ultimate-react-course/learn/lecture/38037894?start=195#content"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl border border-[#9DB2BF]/20 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-lg font-semibold text-[#27374D]">
              The Ultimate React Course
            </p>
            <p className="mt-2 text-sm leading-7 text-[#526D82]">
              Reactのコンポーネント設計、状態管理、ルーティング、実践的なアプリ開発を学習。(学習：約200時間)
            </p>
          </a>

          <a
            href="https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649313?start=15#content"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl border border-[#9DB2BF]/20 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-lg font-semibold text-[#27374D]">
              The Complete JavaScript Course
            </p>
            <p className="mt-2 text-sm leading-7 text-[#526D82]">
              JavaScriptの基礎から非同期処理、配列操作、設計の考え方までを学習。(学習：約300時間)
            </p>
          </a>

          <a
            href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/learn/lecture/27512228?start=0#overview"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl border border-[#9DB2BF]/20 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-lg font-semibold text-[#27374D]">
              Build Responsive Real-World Websites with HTML and CSS
            </p>
            <p className="mt-2 text-sm leading-7 text-[#526D82]">
              HTML/CSSの基礎、レイアウト設計、レスポンシブ対応、UIの整え方を学習。(学習：約100時間)
            </p>
          </a>

          <a
            href="https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12386708?start=0#content"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl border border-[#9DB2BF]/20 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-lg font-semibold text-[#27374D]">
              The Complete Web Development Bootcamp
            </p>
            <p className="mt-2 text-sm leading-7 text-[#526D82]">
              フロントエンドからバックエンドまで、Web開発全体の流れを広く学習。(学習：約150時間)
            </p>
          </a>

          <a
            href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15087348?start=15#content"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl border border-[#9DB2BF]/20 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-lg font-semibold text-[#27374D]">
              Node.js, Express, MongoDB Bootcamp
            </p>
            <p className="mt-2 text-sm leading-7 text-[#526D82]">
              バックエンドの理解を深めるために学習。(学習：約50時間)
            </p>
          </a>
        </div>
      </section>
    </>
  );
}

export default LearningResources;
