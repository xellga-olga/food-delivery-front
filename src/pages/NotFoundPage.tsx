import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page">
      <h1>Page not found</h1>
      <p>
        This route does not exist yet. Go back to the <Link to="/">home page</Link>.
      </p>
    </section>
  )
}

export default NotFoundPage
