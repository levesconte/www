import SpecialText from "../components/special-text";

export default function NotFound() {
  return (
    <div className="flex flex-row justify-center">
      <SpecialText text="404" />
      <span className="ml-1 mr-1"> — </span>
      <p>Page not found.</p>
    </div>
  );
}
