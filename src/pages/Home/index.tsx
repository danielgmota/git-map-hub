import { FormEvent, useEffect, useState } from "react";
import {
  apiGetGithubRepos,
  apiGetGithubUser,
  apiGetMapboxLocation,
} from "../../services/apiService";
import { IGitHubUser } from "../../interfaces/IGitHubUser";
import { Map } from "../../components/Map";
import { Container } from "./style";
import Header from "../../components/Header";
import { formatDate } from "../../utils/formatDate";

export function Home() {
  const [userSearch, setUserSearch] = useState<string>("");
  const [userFound, setUserFound] = useState<IGitHubUser>();
  const [coordUser, setCoordUser] = useState([]);
  const [userRepos, setUserRepos] = useState([]);

  const searchUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userSearch) {
      const res = await apiGetGithubUser(userSearch);
      setUserFound(res);
      listRepos(res.repos_url);
    }
  };

  const listRepos = async (url: string) => {
    const res = await apiGetGithubRepos(url);
    setUserRepos(res);
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
        <div className="flex">
          <div className="map">
            {userFound && (
              <Map
                coord={coordUser}
                userLogin={userFound?.login}
                userName={userFound?.name}
                userAvatar={userFound?.avatar_url}
              />
            )}
          </div>
          <div className="repo">
            {userFound && (
              <>
                <p>Repositórios públicos:</p>
                <ul>
                  {userRepos &&
                    userRepos.map((repo, key) => {
                      const { name, html_url, pushed_at } = repo;
                      let datePushed = formatDate(pushed_at);

                      return (
                        <li key={key}>
                          <a href={html_url} target="_blank" rel="noreferrer">
                            {name}
                          </a>{" "}
                          ({datePushed})
                        </li>
                      );
                    })}
                </ul>
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
