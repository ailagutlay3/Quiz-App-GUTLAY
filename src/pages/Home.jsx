function Home({ onStart }) {
  return (
    <div className="home-page">
      <div className="home-card">
        <h1>Welcome to the Frontend Quiz!</h1>

        <p>
          Test your knowledge.
          Answer the questions and see how well you score!
        </p>

        <button onClick={onStart}>Start Quiz</button>
      </div>
    </div>
  );
}

export default Home;