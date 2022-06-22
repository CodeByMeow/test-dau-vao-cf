import { SHORTEN_DOMAIN } from './API/config';
import { useState } from 'react';
import shortenService from './API';

const App = () => {
  const [url, setUrl] = useState();
  const [shorten, setShorten] = useState();
  const [shrtDomain, setShrtDomain] = useState();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await shortenService.createShorterURL(url);
    const result = response.data.result;
    const prop = SHORTEN_DOMAIN[shrtDomain] ?? Object.values(SHORTEN_DOMAIN)[0];
    setShorten(result[prop]);
  }

  const onChangeHandler = (e) => {
    setUrl(e.target.value);
  }

  const onSelectShortenDomain = (e) => {
    setShrtDomain(e.target.value);
  }

  const domains = Object.keys(SHORTEN_DOMAIN).map((domain, index) => {
  return (
    <div key={index}>
      <input type='radio' id={domain} name='domain' value={domain} onChange={onSelectShortenDomain} />
      <label htmlFor={domain}>{domain}</label>
    </div>
  )});

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Link shortener</h1>
        <form
          className="shorten-form"
          onSubmit={onSubmitHandler}
        >
          <div className='input-link'>
            <label
              htmlFor="shorten"
            >
              Enter a Link:
            </label>
            <input
              name="url"
              id="shorten"
              className="shorten"
              placeholder="example.com"
              onChange={onChangeHandler}
            />
            <button type="submit" ><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='domain-container'>
            <p>Short domain</p>
            <div className='domain-list'>
              {domains}
            </div>
          </div>
        </form>
        <p>With this free Link Shortener you can make Link shorter and easier to remember. Just enter a Link into the form and click on the above Button to generate a short Link. When visit the short-Link, the short-Link will immediately redirect you to the long link</p>
      </div>
      {
        shorten &&
        <div className='result'>
          <h3>Link generated</h3>
          <a href={shorten}>{shorten}</a>
        </div>
      }
    </div>
  );
}

export default App;
