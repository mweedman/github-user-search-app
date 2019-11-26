'use strict';

const baseURL = 'https://api.github.com/search/users?q='

const renderRepos = (repoData)  => {
    console.log(repoData);
    repoData.items.map(item => (console.log(item.repos_url)))
}

const apiFetch = (searchHandle) => {
    const newURL = `${baseURL}${searchHandle}`
    console.log(newURL);
    return fetch(newURL)
        .then(res => {
            if(!res.ok) {
                alert('No user found.')
            }
            return res;
        })
        .then(res => res.json())
        .then(data => renderRepos(data));
}

const submitForm = function() {
    $('#inputForm').submit( (e) => {
        e.preventDefault();
        $('.results').empty();
        const userToSearch = $('#userSearch').val();
        console.log(userToSearch);
        apiFetch(userToSearch);
    });
}

const bindListeners = () => {
    submitForm();
}

const main = function(){
    bindListeners();
}

$(main)