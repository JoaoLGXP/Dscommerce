import "./styles.css";

type Props = {
    text: string;
}

export default function ButtonPrimary({ text }: Props) {
    return (
        <button type='submit' className="dsc-btn dsc-btn-blue">{text}</button>
    );
}