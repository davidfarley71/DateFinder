import React from "react";
import { render } from "react-dom";
import Picky from "react-picky";
import "react-picky/dist/picky.css";

const bigList = [];
const countriesListKey = "__countries_list";

for (var i = 1; i <= 1000; i++) {
  bigList.push({ id: i, name: `Item ${i}` });
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      arrayValue: [],
      countriesList: []
    };
    this.selectOption = this.selectOption.bind(this);
    this.selectMultipleOption = this.selectMultipleOption.bind(this);
  }
  getCountries = () => {
    if (localStorage.getItem(countriesListKey)) {
      return this.setState(
        {
          countriesList: JSON.parse(localStorage.getItem(countriesListKey))
        },
        () => {
          console.log(this.state);
        }
      );
    }
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(countries => {
        localStorage.setItem(countriesListKey, JSON.stringify(countries));
        console.log(countries);
        this.setState({
          countriesList: countries
        });
      });
  };
  selectOption(value) {
    console.log("Vals", value);
    this.setState({ value });
  }
  selectMultipleOption(value) {
    console.log("Val", value);
    this.setState({ arrayValue: value });
  }

  componentWillMount() {
    this.getCountries();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Custom rendered multiselect</h3>
            <Picky
              value={this.state.arrayValue}
              options={this.state.countriesList}
              onChange={this.selectMultipleOption}
              open={false}
              valueKey="alpha3Code"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              includeFilter={true}
              placeholder={"No countries selected"}
              allSelectedPlaceholder={"All countries selected"}
              manySelectedPlaceholder={"You have selected %s countries"}
              dropdownHeight={600}
              render={({
                index,
                style,
                item,
                isSelected,
                selectValue,
                labelKey,
                valueKey,
                multiple
              }) => {
                return (
                  <li
                    style={{ ...style }} // required
                    className={isSelected ? "selected" : ""} // required to indicate is selected
                    key={item[valueKey]} // required
                    onClick={() => selectValue(item)}
                  >
                    <img
                      alt={item.name}
                      src={item.flag}
                      style={{ height: "15px", width: "30px" }}
                    />
                    <span
                      style={{
                        fontWeight: isSelected ? "bold" : "normal"
                      }}
                    >
                      {item[labelKey]}
                    </span>
                  </li>
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

