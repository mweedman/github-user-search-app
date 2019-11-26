"use strict";

const baseURL = "https://api.github.com/users/";

const renderRepos = repoData => {
  console.log(repoData);
  repoData.map(repo => {
    $(".results").append(repoHtml(repo));
  });
};

const repoHtml = repo => {
  return `
    <h2>${repo.name}</h2>
    <h6>${repo.url}</h6>
    `;
};

const apiFetch = searchHandle => {
  const newURL = `${baseURL}${searchHandle}/repos`;
  console.log(newURL);
  return fetch(newURL)
    .then(res => {
      if (!res.ok) {
        alert("No user found.");
      }
      return res;
    })
    .then(res => res.json())
    .then(data => renderRepos(data));
};

const submitForm = function() {
  $("#inputForm").submit(e => {
    e.preventDefault();
    $(".results").empty();
    const userToSearch = $("#userSearch").val();
    console.log(userToSearch);
    apiFetch(userToSearch);
  });
};

const bindListeners = () => {
  submitForm();
};

const main = function() {
  bindListeners();
};

$(main);
