import style from './InputBox.module.css'


const InputBox = ({calVal}) => {

  return (
    <div>
      <input className={style.input} type="text" placeholder="0" readOnly value={calVal} />
    </div>
  );
};

export default InputBox;
