// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("does it work?" + data.title);
  // return `# Project ${data.title}
  // ## Description 
  // ${data.description}
  // ## Table of contents
  // - [Installation Instructions](#Installation-Instructions)
  // - []
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation Instructions](#Installation-Instructions)
  - [Usage Information](#Usage-Information)
  - [Contribution Guidelines](#Contribution-Guidelines)
  - [Tests](#Tests)
  - [Licensing](#Licensing)
  - [Contact Me](#Contact-Me)
  
  ## Installation Instructions
  ${data.install}
  
  ## Usage Information
  ${data.usage}
  
  ### Contribution Guidelines
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Licensing
  ${data.license}

  ## Contact Me
  To see my github repository please visit my [Github repository](https://github.com/${data.username})
  
  To contact me for more questions feel free to email me at: ${data.email}
  
  
  `
  
;


}

module.exports = generateMarkdown;
