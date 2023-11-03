
import './Prompt.css';

export default function Prompt(props){
    const written = props.written;
    const pointer = props.pointer;
    const unWritten = props.unWritten;

return (
    <div className = 'prompt'>
        <span className = "typed-phrase">{written}</span>
        <span className = "pointer">{pointer}</span> {/* where use left off*/}
        {unWritten}
        {/*rest of phrase goes here*/}
    </div>
    )
}