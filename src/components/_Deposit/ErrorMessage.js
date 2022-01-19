export default function ErrorMessage({ message }) {
    if (!message) return null;
  
    return (
      <div>
        <label>{message}</label>
      </div>
    );
}
  