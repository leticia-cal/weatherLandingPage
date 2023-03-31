import './style.css'

export function TitleAndNumber({label, contentNumber}) {
  return (
    <>
      <p className="contentLabel">{label}</p>
      <p className="contentNumber">{contentNumber}</p>
    </>
  );
}
