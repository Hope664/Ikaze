import './QuizBanner.css'

function QuizBanner() {
  return (
    <div className="quiz-banner">
      <div className="quiz-banner-card">
        <a href="/quiz" className="quiz-btn">Continue to Preferences</a>
        <p>"Answer a few quick questions so Ikaze can recommend services that match your interests."</p>
      </div>
    </div>
  )
}

export default QuizBanner