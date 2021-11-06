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
  const [searchKeyword, setSearchKeyword] = useState("");

  const searchUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userSearch) {
      const res = await apiGetGithubUser(userSearch);
      if (res !== undefined) {
        setUserFound(res);
        fetchRepos(res.repos_url);
      }
    }
  };

  const fetchRepos = async (url: string) => {
    const res = await apiGetGithubRepos(url);
    setUserRepos(res);
  };

  const sortRecentRepos = () => {
    const tempRepo = [...userRepos];
    tempRepo.sort(
      (a: { pushed_at: number }, b: { pushed_at: number }) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    );
    setUserRepos(tempRepo);
  };

  const sortAlphabeticalRepos = () => {
    const tempRepo = [...userRepos];
    tempRepo.sort((a: { name: string }, b: { name: string }) =>
      a.name.localeCompare(b.name)
    );
    setUserRepos(tempRepo);
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
            className="form-theme"
            onChange={(event) => setUserSearch(event.target.value)}
            placeholder="Digite nome do usuário"
          />
          <button className="form-theme">Pesquisar</button>
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
                <h4>Repositórios públicos:</h4>
                <div className="filters">
                  <div>
                    <button
                      onClick={sortAlphabeticalRepos}
                      className="form-theme"
                    >
                      Ordenar por nome
                    </button>
                    <button onClick={sortRecentRepos} className="form-theme">
                      Ordenar por recentes
                    </button>
                  </div>
                  <input
                    value={searchKeyword}
                    className="form-theme"
                    onChange={(event) => setSearchKeyword(event.target.value)}
                    placeholder="Nome respositório"
                  />
                </div>
                <ul>
                  {userRepos &&
                    userRepos
                      .filter((keyword: { name: string }) => {
                        if (searchKeyword !== "") {
                          return keyword.name
                            .toLowerCase()
                            .includes(searchKeyword.toLowerCase());
                        }
                        return keyword.name;
                      })
                      .map((repo, key) => {
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
