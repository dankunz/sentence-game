import SentenceForm from '../components/SentenceForm'
import SentenceResult from '../components/SentenceResult'
import "./SentencePage.css";

export default function SentencePage() {
    return (
        <div className='sentence-page'>
            <SentenceForm />
            <SentenceResult />
        </div>
    )
}