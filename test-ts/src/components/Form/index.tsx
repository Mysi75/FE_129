import React, {FunctionComponent, useState} from "react";

type TForm = {
edit: (n: string) => void,
className?: string,

}

type TFormComponent = FunctionComponent<TForm>;

const Form: TFormComponent= (props) => {
const {
    edit,
    className
} = props;
const [text, setText] = useState('');


const changeText = (e:React.ChangeEvent<HTMLInputElement>) => {
    let elem = e.target;
    setText(elem.value);

}

const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    edit(text)
}

    return(
        <div>
            <form onSubmit={formHandler}>
                <input type="text" onChange={changeText} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;
