// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? `* [License](#license)` : ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  This project is licensed with ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
      
  ## Description
  ${data.description}

  ## Installation 
  ${data.installation}
    
  ## Usage 
  ${data.usage}
    
  ${renderLicenseSection(data.license)}
    
  ## Contributing
  ${data.contributing}
    
  ## Test 
  ${data.test}
    
  ## Questions
    
  If you would like to reference my GitHub profile please click on https://github.com/${data.gitHubQuestion}
    
  If you have any further questions please feel free to email me at ${data.emailQuestion}
  `;
}
module.exports = generateMarkdown;



