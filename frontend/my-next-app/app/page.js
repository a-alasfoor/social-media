// app/page.js  (replace content)
export default async function HomePage() {
  try {
    const res = await fetch("http://localhost:8080/users", { cache: "no-store" });
    const ct = res.headers.get("content-type") || "";
    if (!res.ok) {
      const text = await res.text();
      return <main style={{ padding: 20 }}><pre>Upstream error {res.status}: {text.slice(0,500)}</pre></main>;
    }
    if (!ct.includes("application/json")) {
      const text = await res.text();
      return <main style={{ padding: 20 }}><pre>Expected JSON but got {ct}: {text.slice(0,500)}</pre></main>;
    }
    const users = await res.json();
    return (
      <main style={{ padding: 20 }}>
        <h1>Users (server-side)</h1>
        <ul>{users.map(u => <li key={u.ID}>{u.FirstName} — {u.Email}</li>)}</ul>
      </main>
    );
  } catch (err) {
    return <main style={{ padding: 20 }}><pre>Fetch error: {String(err)}</pre></main>;
  }
}
