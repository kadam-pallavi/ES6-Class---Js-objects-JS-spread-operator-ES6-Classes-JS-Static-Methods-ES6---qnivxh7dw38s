class API{
  #secure;
  
  constructor (url, method='GET'){
    this.url=url;
    this.method=method;
    this.#secure= url.startsWith('https');
  }
  isSecure(){
    return this.#secure;
  }
  updateUrl(newURL){
    this.url=newURL;
    this.#secure= newURL.startsWith('https');
  }
}


module.exports = { API }
