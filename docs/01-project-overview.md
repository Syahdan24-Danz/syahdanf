# Project Overview

## Background

I built a React portfolio website and deployed it to AWS to gain practical
experience with cloud infrastructure and Linux server administration. The
deployment was done in an AWS lab environment on 2 November 2026.

The focus is the deployment process: networking, access control, a web
server, monitoring, and cost. The application is a static single-page site.

## Objectives

- Understand how an application is hosted on an EC2 instance.
- Practice connecting to a Linux server using SSH.
- Configure network access through a security group.
- Use Nginx to serve a production frontend build.
- Monitor the instance and set up an email alert.
- Document deployment steps and actual results.

## Scope

### Included

- Local production build of the React application.
- Ubuntu EC2 instance.
- SSH connection.
- Nginx installation and configuration.
- File transfer using SCP.
- Browser access to the deployed website.
- CloudWatch metrics, a CPU alarm design, and an SNS email topic.
- A monthly cost estimate.

### Not Implemented

- Backend application and database.
- Custom domain and HTTPS.
- Load balancing and Auto Scaling.
- Automated deployment (CI/CD).
- An end-to-end CloudWatch alarm test.

## Environment

| Configuration | Value |
|---|---|
| AWS account type | AWS lab environment |
| AWS Region | US East (N. Virginia) — us-east-1 |
| Instance name | syahdan-portfolio-ec2 |
| Instance type | t3.micro |
| Ubuntu version | Not recorded |
| EBS volume | 8 GiB, attached to /dev/sda1 (volume type not recorded) |
| Web server | Nginx 1.28.3 |
| Application repository | https://github.com/Syahdan24-Danz/syahdanf |
| Source commit | Not recorded (the repository was published to GitHub after deployment) |
| Deployment date | 2 November 2026 |
| Current state | Lab instance shut down; the site is no longer reachable |

## Network Access Design

| Traffic | Port | Intended Source | Purpose |
|---|---|---|---|
| SSH | 22 | Administrator's public IP /32 | Server administration and SCP |
| HTTP | 80 | 0.0.0.0/0 | Public website access |

The actual security group rules were not captured in the evidence, so this
table records the intended design rather than a verified configuration.

## Application Delivery

The production build was generated on the laptop. Its output was uploaded to
`/var/www/portfolio` on the EC2 instance, and Nginx uses this directory as its
document root.

The single-page-app fallback sends frontend routes to `index.html`. Requests
for missing files under `/assets/` return HTTP 404 instead of falling back, so
a broken asset path is visible rather than hidden behind the home page.

## Outcome

The website loaded successfully in the browser through the instance's public
IP address on 2 November 2026. The Nginx service was active, its configuration
test passed, and a local request returned HTTP 200.

Detailed results and the checks that were not completed are in
[03-testing.md](03-testing.md).
