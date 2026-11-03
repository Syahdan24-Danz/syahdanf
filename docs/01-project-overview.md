# Project Overview

## Background

An existing React portfolio website was deployed to AWS to gain practical
experience with cloud infrastructure and Linux server administration.

The project focuses on the deployment process rather than developing
a new application.

## Objectives

- Understand how an application is hosted on an EC2 instance.
- Practice connecting to a Linux server using SSH.
- Configure network access through a security group.
- Use Nginx to serve a production frontend build.
- Document deployment steps and actual results.

## Scope

### Included

- Local production build of the React application.
- Ubuntu EC2 instance.
- SSH connection.
- Nginx installation and configuration.
- File transfer using SCP.
- Initial browser access to the deployed website.

### Not Implemented

- Backend application and database.
- Custom domain and HTTPS.
- Load balancing and Auto Scaling.
- Automated deployment.
- CloudWatch alarms and cost analysis.

## Environment

Fill in these values from the actual deployment.

| Configuration | Actual Value |
|---|---|
| AWS account type | [isi: AWS Academy atau pribadi] |
| AWS Region | [isi region] |
| Instance name | [isi nama instance] |
| Instance type | [isi tipe instance] |
| Ubuntu version | [isi versi Ubuntu] |
| EBS volume type and size | [isi jenis dan kapasitas disk] |
| Application repository | [isi URL repository React] |
| Source commit | [isi commit yang dibuild, jika diketahui] |
| Deployment date | [isi tanggal deployment] |

## Network Access Design

| Traffic | Port | Intended Source | Purpose |
|---|---|---|---|
| SSH | 22 | Administrator's public IP /32 | Server administration and SCP |
| HTTP | 80 | 0.0.0.0/0 | Public website access |

Verify the actual security group settings before recording them as tested.

## Application Delivery

The production build was generated on the laptop. Its output was uploaded
to /var/www/portfolio on the EC2 instance.

Nginx was configured to use this directory as its document root.

The SPA fallback directs frontend routes to index.html. Requests for
missing files under /assets/ return HTTP 404.

## Current Outcome

The website is accessible through the EC2 instance's public IP address.
This initial browser check has been confirmed by the author.

Detailed infrastructure evidence and the remaining test results are
recorded separately in the testing document.