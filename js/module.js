/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */
"use strict";
/**
 * A URL PARSER
 * This function analyses an url.
 * Please refer to the "https://de.wikipedia.org/wiki/Uniform_Resource_Locator"
 */
function analyseUrl(pUrl) {
    let r = {
        host: null
        , query: null
        , schema: null
    }; // and other props.
    //...
    r.schema = pUrl.split("://")[0];
    if (pUrl.indexOf(":", 8) > -1) {
        r.host = pUrl.substring(r.schema.length + 3, pUrl.indexOf(":", 8));
    }
    else if (pUrl.indexOf("/", 8) > -1) {
        r.host = pUrl.substring(r.schema.length + 3, pUrl.indexOf("/", 8));
    }
    else if (pUrl.indexOf("?", 8) > -1) {
        r.host = pUrl.substring(r.schema.length + 3, pUrl.indexOf("?", 8));
    }
    else if (pUrl.indexOf("#", 8) > -1) {
        r.host = pUrl.substring(r.schema.length + 3, pUrl.indexOf("#", 8));
    }
    else {
        r.host = pUrl.substring(r.schema.length + 3, pUrl.length);
    }
    
    if (pUrl.includes("#")){
        r.fragment = pUrl.substring(pUrl.indexOf("#")+1, pUrl.length);
    }
    return r;
}
//  it('An url will be parsed an return all the parts in an object.', function(){
// let analysis = analyseUrl('https://it-club-oberland.ch#section');
// analysis.schema.should.be.equal('https');
//analysis.host.should.be.equal('it-club-oberland.ch');
//analysis.fragment.should.be.equal('section');
/**
 * This function creates an array of all possible letter combinations of a given word.
 *
 */
function populateWord(pString) {
    let result = [];
    //...
    return result;
}