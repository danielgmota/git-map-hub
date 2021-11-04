import { useHistory } from "react-router-dom";
import { apiPostGithubOauth } from "../../services/apiService";

export default function Repos() {
  const history = useHistory();
  const url = window.location.href;
  const hasCode = url.includes("?code=");
  let completeUrl: string[];

  if (hasCode) {
    completeUrl = url.split("?code=");
    history.push("/repos");

    requestData(completeUrl[1]);
  }

  async function requestData(data: string) {
    console.log(data);

    const res = await apiPostGithubOauth(data);
    console.log(res);
  }

  return <div>repos</div>;
}
