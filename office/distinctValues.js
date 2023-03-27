const distict = (arr) => {
  let allElements = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      allElements.push(arr[i][j])
    }
  }

  const obj = {}

  for (let i = 0; i < allElements.length; i++) {
    obj[allElements[i]] = (obj[allElements[i]] || 0) + 1
  }

  let finalArray = []

  for (i in obj) {
    finalArray.push(i)
  }
  let str = ''
  for (let i = 0; i < finalArray.length; i++) {
    str += `${i + 1} - ${finalArray[i]} \n`
  }
  return str
}

const arr = [
  [
    'GitLab',
    'Automattic',
    'Zapier',
    'Buffer',
    'InVision',
    'Basecamp',
    'Doist',
    'Toggl',
    'Toptal',
    'Clevertech',
    'CrowdStrike',
    'HubSpot',
    'Khan Academy',
    'Shopify',
    'Slack',
    'Twilio',
    'Hubstaff',
    'Hotjar',
    'TaxJar',
    'Dribbble',
    'Automattic (WordPress)',
    'Scrapinghub',
    'X-Team',
    '10up',
    'Upwork',
    'Elastic',
    'Auth0',
    'Okta',
    'Automattic (the company behind WordPress)',
    'CloudBees',
    'Amazon',
    'Atlassian',
    'DigitalOcean',
    'HashiCorp',
    'Oracle',
    'PagerDuty',
    'Salesforce',
    'SAP',
    'Segment',
    'BrainTrust',
  ],
  [
    'Stripe',
    'Mozilla',
    'Twilio',
    'MongoDB',
    'Elastic',
    'Shopify',
    'Zapier',
    'Red Hat',
    'GitBook',
    'CircleCI',
    'Confluent',
    'Mattermost',
    'Automattic (the company behind WordPress)',
    'HashiCorp',
    'DataStax',
    'Clevertech',
    'Close.io',
    'Protocol Labs',
    'Automox',
    'X-Team',
    'Chef',
    'Auth0',
    'Fastly',
    'GitLab',
    'Linode',
    'Canonical',
    'HashedIn',
    'Snyk',
    'Algolia',
    'New Relic',
  ],
]

console.log(distict(arr))
