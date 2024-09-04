import style from './Button.module.css'

const Button = ({onButtonClick})=>{

  const buttonName = ['AC', 'DEL','%','/','7','8','9','*','4','5','6','-','1','2','3','+','00','0','.','=']


  const changeButtonBackground = (name) => {
    switch (name) {
      case 'AC':
        return `${style.button} ${style.acButton}`;
      case 'DEL':
        return `${style.button} ${style.delButton}`;
      case '=':
        return `${style.button} ${style.equalButton}`;
      default:
        return style.button;
    }
  };

return (
<div className={style.buttonContainer}>
  {
    buttonName.map(buttonName =>{
      return <button key={buttonName} className={changeButtonBackground(buttonName)} onClick={()=>onButtonClick(buttonName)} >{buttonName}</button>
    })
  }
</div>
)
}


export default Button;