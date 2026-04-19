export default function Greeting({theme, username}) {
  return (
    <div className="card">
      <h2>{username ? `Welcome back, ${username}` : 'Please login.'}</h2>
      <p className="muted">Current theme: {theme}</p>
      <p className="muted">
        This component received <code>username</code> and <code>theme</code> as
        props, drilled down from <code>App → Layout → Page → Greeting</code>.
      </p>
    </div>
  );
}
