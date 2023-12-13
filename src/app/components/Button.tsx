type ButtonProps = {
  text: string
  color: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  icon?: string

}

const Button = ({ text, color, icon }: ButtonProps) => {
  return (
    <button>{icon}{text}</button>
  )
}

export default Button;