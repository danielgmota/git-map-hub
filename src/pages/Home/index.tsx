import { FormEvent, useState } from "react";
import { apiGetGithubUser } from "../../services/apiService";
import { IGitHubUser } from "../../interfaces/IGitHubUser";

export function Home() {
  const [userSearch, setUserSearch] = useState<string>("");
  const [userFound, setUserFound] = useState<IGitHubUser>();

  const searchUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await apiGetGithubUser(userSearch);
    setUserFound(res);
  };

  return (
    <div>
      <form onSubmit={searchUser}>
        <input
          value={userSearch}
          onChange={(event) => setUserSearch(event.target.value)}
          placeholder="Digite nome do usuário"
        />
        <button>Pesquisar</button>
      </form>
      {userFound && (
        <div>
          {userFound.login}
          {userFound.location}
          <img src={userFound.avatar_url} alt={userFound.name} />
        </div>
      )}
    </div>
  );
}
