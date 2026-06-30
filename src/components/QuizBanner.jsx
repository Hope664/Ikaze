import { useNavigate } from 'react-router-dom'
import './QuizBanner.css'

function QuizBanner() {
  const navigate = useNavigate()
  return (
    <div className="quiz-banner">
      <div className="quiz-banner-card">
        <button className="quiz-btn" onClick={() => navigate('/quiz')}>Continue to Preferences</button>
        <span className="btn-signup" onClick={() => navigate('/auth?step=signup&role=user')}>Sign up</span>
        <p>"Answer a few quick questions so Ikaze can recommend services that match your interests."</p>
      </div>
    </div>
  )
}

export default QuizBanner