export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.resposity?.name ?? ''}</strong>
      <p>{props.resposity?.description ?? 'Default'}</p>
      <a href={props.resposity?.link ?? 'Default'}>Acessar Repositório</a>
    </li>
  );
}
