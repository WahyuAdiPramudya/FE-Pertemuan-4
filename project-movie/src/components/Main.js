
import Hello from './Hello.js';
function Main() {
    // Mengirim props
    return (
        <div>
            <Hello name="Wahyu" age="21" major="Backend Engineer"/>
            <Hello name="Hafizh" age="21" major="Mechanical Engineer"/>
            <Hello name="Apit" age="20" major="Frontend Engineer"/>
            <Hello name="Adi" age="21" major="UI Designer"/>
            <Hello name="Pramudya" age="21" major="Photographer"/>
        </div>
    )
}

export default Main;