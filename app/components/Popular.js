var React = require("react");
var PropTypes = require("prop-types");
var api = require("./../utils/api");
var Loading = require("./Loading");

function SelectedLanguage(props) {
  var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="languages">

      {languages.map(lang => {
        return (
          <li
            style={lang === props.selectedLang ? { color: "#d0021b" } : null}
            key={lang}
            onClick={props.onSelect.bind(null, lang)}
          >

            {lang}
          </li>
        );
      })}
    </ul>
  );
}

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map(function(repo, index) {
        return (
          <li key={repo.name} className="popular-item">

            <div className="popular-rank">#{index + 1}</div>

            <ul className="space-list-items">

              <li>

                <img
                  className="Avatar"
                  src={repo.owner.avatar_url}
                  alt={" Avatar for " + repo.owner.login}
                  />

              </li>

              <li>

                <a href={repo.html_url}>
                  {repo.name}
                </a>

              </li>

              <li>

                @{repo.owner.login}
              </li>

              <li>
                {repo.stargazers_count} stars
              </li>

            </ul>

          </li>
        );
      })}

    </ul>
  );
}

SelectedLanguage.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}
class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: "All",
      repos: null
    };
    this.updatedLang = this.updatedLang.bind(this);
  }
  updatedLang(lang) {
    this.setState(function() {
      return {
        selectedLang: lang
      };
    });

    api.fetchPopularRepos(lang).then(repos => {
      this.setState(function() {
        return {
          repos: repos
        };
      });
    });
  }
  componentDidMount() {
    this.updatedLang(this.state.selectedLang);
  }
  render() {
    return (
      <div>

        <SelectedLanguage
          selectedLang={this.state.selectedLang}
          onSelect={this.updatedLang}
        />
      {!this.state.repos
        ? <Loading />
        : <RepoGrid repos={this.state.repos} />
      }

      </div>
    );
  }
}

module.exports = Popular;
