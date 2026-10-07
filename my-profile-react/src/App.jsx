import './App.css'

const skills = [
  { group: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { group: 'Programming', items: ['Java','Python', 'C++'] },
]

const interests = ['Web Development', 'Programming', 'Linux', 'Open Source']

function App() {
  return (
    <main className="page">
      <article className="profile">
        <aside className="profile__side">
          <div className="avatar" aria-hidden="true">
            VT
          </div>
          <h1 className="profile__name">V. G. Thamilkumaran</h1>
          <p className="profile__degree">B.Tech Information Technology</p>
        </aside>

        <div className="profile__main">
          <section className="block">
            <h2 className="block__title">About</h2>
            <p className="block__text">
              Hello! I am an Information Technology student interested in
              programming and web development.
            </p>
          </section>

          <section className="block">
            <h2 className="block__title">Skills</h2>
            {skills.map(({ group, items }) => (
              <div className="skill-group" key={group}>
                <h3 className="skill-group__name">{group}</h3>
                <ul className="chips">
                  {items.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="block">
            <h2 className="block__title">Interests</h2>
            <ul className="chips chips--outline">
              {interests.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  )
}

export default App