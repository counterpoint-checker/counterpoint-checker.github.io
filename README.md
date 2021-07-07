# Introduction

This is the repo for Feature 210516: https://steelcase.visualstudio.com/Enterprise%20TechOps/_workitems/edit/210516/

The current dashboard partially depends on SolarWinds and does not incorporate the info in turnover emails.

This is in React. The idea is that a script will run every hour automatically and update files with API data, which this dashboard will read from. Also, users should be able to manually trigger file updates/API calls from the dashboard.

# Run

```
git clone https://steelcase.visualstudio.com/Enterprise%20TechOps/_git/TeamDashboard
cd TeamDashboard
npm install
npm start
```

# Required Information

## Done

* failed nbu jobs
    * nbu admin
* p1 and TechOps p2 incidents
    * snow incident table
* offline media servers
    * nbu storage
* appliance and remote server diskpool usage
    * nbu storage
* sticky notes for next shift

## Not Done

* disk space warnings and critical
    * snow accm
* down servers and networks
    * snow accm
* d series bad jobs and memcheck
    * another display, filter for failed jobs
* down tape drives
    * nbu eventlog
* slps
    * accm
* make noise when something goes red

# Notes

## 24 June Feedback

### Agenda

required info and what to add

design (laptop look and mobile look)
* dark mode
* color individual rows of table too
* change icons on left

app and server diskpools
* show free space

failed jobs
* policyname
* schedulename
* start time for jobs

down media server
* have all storage servers with status
* color by down
* sort

incidents
* assignment group
* last updated

nbu-svc creds in plaintext
    remove, lots of permissions
pass creds by cmdline
    def possible in d series

### Other

one idea, mural look from metascrum

## original

every hour at 945 was 15 min turnover meeting, tats why dashboard refreshes then
deployed in windows server
writing to json files inside same folder on server
app reads from files

## brainstorm

react app
- will load data from files
- ability to update individual components, data
a. imagine someone manually bringing a server online, they should be able to manually repeatedly refresh a single component to see if it's up now

files will be updated every hour or twice an hour
- can be deployed same way as current dashboard and nbu cmdb script: task scheduler on windows server like us-grr-ap0061

## current dashboard

Failed NetBackup jobs
- nbu
- more than 20 failed is red
- less than 10 is green
- show number too

Disk space warnings
Disk space critical
- will come from snow
- from solarwinds rn actually

Open P1 incidents (all teams)
Open P2 incidents (TechOps team only)
- from snow

Servers alerting as "down" (data not yet available from ACC-M)
Networks alerting as "down" (data not yet available from tool not yet selected)
- from ai engine
- put query call there, even w no response

## turnover email

dSeries count of Failed jobs
dSeries count of Overdue jobs
- other jobs didn't finish
- no ranges for top 2

dSeries count of Waiting jobs
- red if any are positive

- these bad jobs auto raise incidents in cmdb, link incidents

dSeries memcheck
- talk to chuck or raul or tom

- above 70 is yellow
- above 80 is red

- d series api

NetBackup - media servers offline
- marius has web crawler, mozilla selenium gecko
- should be in nbu api now
- red if any r down

Tape drives - offline drives or paths
- red if any are down

SLP count for BKP001
SLP count for US-GRR-BKP002
- slp is script that runs on one of above servers
- talk to raul, hassan, andy
- higher than 1000 is red, above 500

Appliance disk pools over X%
Media server disk pools over Y%
- from nbu

## other

IF POSSIBLE: A nice to have feature would be a editable field area that the team members could put in a note that stays there until someone deletes it or changes it.