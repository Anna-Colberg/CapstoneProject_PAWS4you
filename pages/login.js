import LoginComponent from "@/components/Login/loginComponent";
import { StyledErrorMessageDiv } from "@/components/Login/styledMessage";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <h1>Activity Planner</h1>

      {error && (
        <StyledErrorMessageDiv>
          Login failed. Please try again.
        </StyledErrorMessageDiv>
      )}

      <LoginComponent />
    </div>
  );
}
