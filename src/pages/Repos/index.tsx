import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { apiPostGithubOauth } from "../../services/apiService";

export default function Repos() {
  const history = useHistory();
  const url = window.location.href;
  const hasCode = url.includes("?code=");
  let completeUrl: string[];

  if (hasCode) {
    completeUrl = url.split("?code=");
    history.push("/?user=");

    requestData(completeUrl[1]);
  }

  async function requestData(data: string) {
    const res = await apiPostGithubOauth(data);
    console.log(res);
    //todo: save access_token in storage
  }

  //todo: get repos public and private

  return (
    <>
      <Header />
      <div>
        <p>Nome:</p>
        <p>Usuario:</p>
        <p>Repositorios:</p>
        <ul></ul>
      </div>
    </>
  );
}
