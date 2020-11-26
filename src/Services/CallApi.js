 function callApi(c) {
    var uri =  new URL( "http://api.aladhan.com/v1/timings");
    uri.searchParams.append("latitude",c.lat);
    uri.searchParams.append("longitude",c.long);
    uri.searchParams.append("method",2);
    uri.searchParams.append("school",0);
    uri.searchParams.append("annual","false");
    
    let result ;
     fetch(uri,{ method: 'GET' }).then(res => {
        if(res.ok)
        return res.json();
    })
    .then(data=>  {
        if(data){
            result = data.data.timings;
        }
    });
    
    return result;
};

export default callApi;