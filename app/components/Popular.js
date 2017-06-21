var React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: "All"
    };
    this.updatedLang = this.updatedLang.bind(this);
  }
  updatedLang(lang) {
    this.setState(function() {
      return {
        selectedLang: lang
      };
    });
  }
  render() {
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

    return ( <ul className = "languages" > {
        languages.map((lang) => {
          return (
            <li
            style = {lang === this.state.selectedLang ? {color : '#d0021b'} : null}
            key = {lang}
            onClick = {this.updatedLang.bind(null, lang)}> {lang} < /li>
          )
        })
      } </ul>
    )
  }
}

module.exports = Popular;
