# Troubleshooting

This document lists issues seen during the deployment and checks for common
problems with this setup. The **Seen** column says whether the issue was
actually observed in this project or is a preventive check.

| Issue | Seen |
|---|---|
| Default Nginx page instead of the portfolio | Possible; hard refresh noted in the guide |
| Browser shows "Not secure" | Yes |
| `active: command not found` | Yes |
| Blank page or missing assets | Preventive check |
| SSH connection times out or is refused | Preventive check |
| Website unreachable from the browser | Preventive check |

## 1. Default Nginx page instead of the portfolio

**Symptom:** `http://YOUR_PUBLIC_IP` still shows "Welcome to nginx!".

**Possible causes:**
- The browser cached the earlier default page.
- The default site is still enabled.
- `index.html` is not directly inside `/var/www/portfolio`.

**Checks:**

```bash
ls -l /etc/nginx/sites-enabled        # only "portfolio" should be listed
ls -la /var/www/portfolio             # index.html and assets/ at the top level
sudo nginx -t && sudo systemctl reload nginx
```

Then do a hard refresh in the browser (Ctrl+Shift+R).

## 2. Browser shows "Not secure"

**Cause:** The site is served over HTTP on port 80 and no TLS certificate is
configured. This is expected for this deployment and does not mean the server
is misconfigured.

**Fix for a future deployment:** Use a custom domain with HTTPS, for example a
certificate through AWS Certificate Manager behind CloudFront, or Let's
Encrypt on the instance.

## 3. `active: command not found`

**Cause:** The word `active` was typed as a command. It is the *expected
output* of `sudo systemctl is-active nginx`, not a command to run.

**Impact:** None. The Nginx service was not affected.

## 4. Blank page or missing CSS and images

**Possible causes:**
- The `dist` folder itself was uploaded instead of its contents, so assets
  end up under `/var/www/portfolio/dist/`.
- Files are not readable by Nginx.

**Checks:**

```bash
ls -la /var/www/portfolio
curl -I http://localhost/assets/        # a real asset path should return 200
```

The Nginx `/assets/` block returns 404 for a missing file on purpose, so a
wrong asset path is visible and not hidden behind `index.html`. Use the
browser's developer tools (Network tab) to find which request fails.

## 5. SSH connection times out or is refused

**Possible causes:**
- The security group's SSH rule does not match your current public IP. Home
  and mobile IPs change.
- The instance is stopped, or the public IP changed after a restart.
- The key file path or permissions are wrong.

**Checks:**
- In the EC2 console, confirm the instance state is *Running* and copy the
  current public IPv4 address.
- Update the SSH source in the security group to your current IP /32.
- Run `ssh -i ".\YOUR_KEY.pem" ubuntu@YOUR_PUBLIC_IP`.

## 6. Website unreachable from the browser

**Checks, in order:**

```bash
sudo systemctl is-active nginx          # expect: active
sudo nginx -t                           # expect: syntax is ok
curl -I http://localhost                # expect: HTTP/1.1 200 OK
```

If the local request works but the browser cannot connect, check the security
group for an inbound HTTP rule on TCP 80 from `0.0.0.0/0`, and confirm you are
using `http://` and the instance's current public IP.

## 7. Public IP changes after stop and start

An auto-assigned public IPv4 address changes when the instance is stopped and
started. For a stable address, allocate an Elastic IP. Note that public IPv4
addresses are billed; see [05-cost-analysis.md](05-cost-analysis.md).
