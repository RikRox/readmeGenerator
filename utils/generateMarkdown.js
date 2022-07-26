// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == '') {
    return '';
  }
  if (license == 'MIT'){
    return `![MIT](https://img.shields.io/badge/License-MIT-brightgreen)`
  }
  if (license == 'GNU GPLv3'){
    return `![MIT](https://img.shields.io/badge/License-GNU_GPLv3-blue)`
  }
  if (license == 'No License'){
    return `![MIT](https://img.shields.io/badge/License-No_License-red)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == '') {
    return '';
  }
  if(license == "MIT"){
    return `MIT License allows: Commercial use, Distribution, Modification, and private use. Conditions include: License and copyright notice. Limitations include: Liability and Warranty.`
  }
  if (license == 'GNU GPLv3'){
    return `MIT License allows: Commercial use, Distribution, Modification, patent use, and private use. Conditions include: Disclose source, License and Copyright notice, Same License, State Changes Limitations include: liability and warranty.`
  }
  if(license == 'No License'){
    return `This project has no license which means it is under exclusive copyright by default. Nobody can copy, distribute or modify.`
  }
}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  const license = data.license;
  renderLicenseBadge(license);

  return `
  ${renderLicenseBadge(license)}
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation Instructions](#Installation-Instructions)
  - [Usage Information](#Usage-Information)
  - [Contribution Guidelines](#Contribution-Guidelines)
  - [Tests](#Tests)
  - [Licensing](#Licensing)
  - [Questions?](#Questions?)
  
  ## Installation Instructions
  ${data.install}
  
  ## Usage Information
  ${data.usage}
  
  ### Contribution Guidelines
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Licensing
  ${renderLicenseSection(license)}

  ## Questions?
  To see my github repository please visit my [Github repository](https://github.com/${data.username})
  
  To contact me for more questions feel free to email me at: ${data.email}
  
  
  `
  
;


}

module.exports = generateMarkdown;
