'use strict';

const baseURL = ''

const apiFetch = (searchHandle) => {
const newURL = `${baseURL}/${searchHandle}`
return fetch(newURL)
    .then(res => {
        if(!res.ok) {
            alert('No user found.')
        }
        return res;
    })
    .then(res => res.json())
    .then(data => console.log(data));
}

const submitForm = function(){
    $('form').submit((e) => {
        e.preventDefault();
        let userToSearch = ('#userSearch').val();
    })
    console.log(userToSearch);
    // apiFetch(userToSearch);
}

const bindListeners = () => {
    submitForm();
}

