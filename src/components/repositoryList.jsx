import { RepositoryItem } from './repositoryItem';

const repository = {
  name: 'Globo',
  description: 'Tudo da Globo',
  link: 'http://globo.com',
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem resposity={repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
