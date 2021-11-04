import { FormEvent, useEffect, useState } from "react";
import {
  apiGetGithubUser,
  apiGetMapboxLocation,
} from "../../services/apiService";
import { IGitHubUser } from "../../interfaces/IGitHubUser";
import { Map } from "../../components/Map";
import { Container } from "./style";
import Header from "../../components/Header";

export function Home() {
  const [userSearch, setUserSearch] = useState<string>("danielgmota");
  const [userFound, setUserFound] = useState<IGitHubUser>();
  const [coordUser, setCoordUser] = useState([]);

  const searchUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await apiGetGithubUser(userSearch);
    setUserFound(res);
  };

  useEffect(() => {
    (async () => {
      const loc = userFound?.location;
      setCoordUser(await apiGetMapboxLocation(loc));
    })();
  }, [userFound]);

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={searchUser}>
          <input
            value={userSearch}
            onChange={(event) => setUserSearch(event.target.value)}
            placeholder="Digite nome do usuário"
          />
          <button>Pesquisar</button>
        </form>
        {userFound && (
          <Map
            coord={coordUser}
            userLogin={userFound?.login}
            userName={userFound?.name}
            userAvatar={userFound?.avatar_url}
          />
        )}
      </Container>
    </>
  );
}
