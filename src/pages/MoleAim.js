import { useState } from 'react'
import MoleContainer from '../components/Mole-Container'

function MoleAim() {
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                    key={i}
                    setScore={setScore}
                    score={score} />
            )
        }

        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>Budget-cut Aim Lab</h1>
            {score}
            {createMoleHill()}
        </div>
    )
}

export default MoleAim