## Test Details

- Date: 2 November 2026
- Recorded test time: 14:35 WIB (UTC+7)
- Tester: Syahdan Firmansyah
- Instance name: syahdan-portfolio-ec2
- Instance type: t3.micro
- Region: us-east-1
- Web server: Nginx 1.28.3 on Ubuntu

The recorded time represents the test session summary. The HTTP response
screenshot shows a request at 07:32:14 GMT (14:32:14 WIB).

## Test Results

| ID | Test | Actual Result | Status |
|---|---|---|---|
| T01 | Access website using the EC2 public IP | React portfolio displayed in the browser | PASS |
| T02 | Check Nginx service | Returned active | PASS |
| T03 | Validate Nginx configuration | Syntax valid; configuration test successful | PASS |
| T04 | Request website locally on EC2 | Returned HTTP/1.1 200 OK | PASS |
| T05 | Check all images, CSS, and icons | Initial page rendered; complete asset check pending | PENDING |
| T06 | Check navigation and buttons | Not yet documented | PENDING |
| T07 | Refresh a valid frontend URL route | Applicability not yet confirmed | PENDING |
| T08 | Review security group rules | Rules not included in current evidence | PENDING |
| T09 | Verify website after instance reboot | Not yet tested | PENDING |

## Evidence

- Browser screenshot showing the deployed React portfolio.
- Terminal screenshot showing Nginx service status, configuration
  validation, and the local HTTP response.
- EC2 screenshot showing the instance name, running state, and type.

## Observation

The website is currently served over HTTP. The browser displays
"Not secure" because HTTPS has not been configured.

An accidental attempt to execute the word active returned
"command not found". This did not affect the Nginx service.

## Conclusion

Initial deployment checks passed: the website is accessible, Nginx is
active, its configuration is valid, and the local server returns HTTP 200.

Full navigation, security group review, and reboot recovery remain pending.