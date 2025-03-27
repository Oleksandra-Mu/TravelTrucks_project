import Btn from "../../components/Btn/Btn";

export default function NotFound() {
  return (
    <div>
      <h3>404 - Page Not Found</h3>
      <p>We are sorry, but the page you are looking for does not exist.</p>

      <Btn
        tag="Go Home"
        variant="back"
        onClick={() => (window.location.href = "/")}
      />
    </div>
  );
}
