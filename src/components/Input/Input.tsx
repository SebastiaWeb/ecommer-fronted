import './index.css';

interface InputPersonalizedProps {
    type: string;
    placeholder: string;
    changeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputPersonalized({ type, placeholder, changeInput }: InputPersonalizedProps) {
    return (
        <div className='w-100  mb-3'>
            <input type={type} placeholder={placeholder} onChange={changeInput} className='inputPersonzalized'/>
        </div>
    );
}

export default InputPersonalized;