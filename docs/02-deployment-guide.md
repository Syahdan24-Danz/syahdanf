# Deployment Guide

This document records the workflow used to deploy the React portfolio to an
Ubuntu EC2 instance with Nginx. Replace `YOUR_KEY.pem` and `YOUR_PUBLIC_IP`
with your own values.

The deployment was performed on 2 November 2026 in an AWS lab. That instance
has been shut down, so the public IP used at the time is no longer valid.

## 1. Prepare the Application — Laptop

Open a terminal in the project directory. The repository uses pnpm
(`pnpm-lock.yaml`):

```bash
pnpm install --frozen-lockfile
pnpm build
```

The Vite build produces a `dist` directory containing `index.html` and an
`assets` folder.

## 2. Create the EC2 Instance — AWS Console

Configuration used:

| Setting | Value |
|---|---|
| Region | us-east-1 (N. Virginia) |
| Instance name | syahdan-portfolio-ec2 |
| Instance type | t3.micro |
| Operating system | Ubuntu Linux |
| Storage | 8 GiB EBS |
| Key pair | Created in the console (the `.pem` file is kept private) |

The instance needs a public IP and a subnet with a route to an internet
gateway for this connection method.

Security group inbound rules:

| Type | Port | Source |
|---|---|---|
| SSH | TCP 22 | Administrator's public IP /32 |
| HTTP | TCP 80 | 0.0.0.0/0 |

Do not open SSH to `0.0.0.0/0`.

## 3. Connect Through SSH — Laptop

From Windows PowerShell, in the directory containing the key:

```powershell
ssh -i ".\YOUR_KEY.pem" ubuntu@YOUR_PUBLIC_IP
```

`ubuntu` is the default login user for the Ubuntu image.

## 4. Install Nginx — EC2

```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl enable --now nginx
sudo systemctl is-active nginx
```

The last command should print `active`. At this point, opening
`http://YOUR_PUBLIC_IP` shows the default Nginx page.

## 5. Prepare the Website Directory — EC2

```bash
sudo mkdir -p /var/www/portfolio
sudo chown ubuntu:ubuntu /var/www/portfolio
```

## 6. Upload the Production Build — Laptop

In a new PowerShell window, from the project directory:

```powershell
scp -i "C:\PATH\TO\YOUR_KEY.pem" -r .\dist\. ubuntu@YOUR_PUBLIC_IP:/var/www/portfolio/
```

Upload the **contents** of `dist` so that `index.html` sits directly inside
`/var/www/portfolio`. Verify in the SSH session:

```bash
ls -la /var/www/portfolio
```

## 7. Configure Nginx — EC2

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

```nginx
server {
    listen 80 default_server;
    server_name _;

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        try_files $uri =404;
    }
}
```

Enable the site and remove the default site link (first-time setup only):

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
sudo unlink /etc/nginx/sites-enabled/default
```

If these were already applied, inspect instead of repeating:

```bash
ls -l /etc/nginx/sites-enabled
```

Validate, and reload only if validation succeeds:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 8. Open the Website — Browser

Open `http://YOUR_PUBLIC_IP`. If the default Nginx page still appears, do a
hard refresh (Ctrl+Shift+R). The browser shows "Not secure" because the site
is served over HTTP.

## 9. Redeploy After Changes

```bash
pnpm build
scp -i "C:\PATH\TO\YOUR_KEY.pem" -r .\dist\. ubuntu@YOUR_PUBLIC_IP:/var/www/portfolio/
```

Nginx serves the files from disk, so no reload is needed for content changes.

## Outcome

The React website loaded successfully in the browser after step 8. Test
results are in [03-testing.md](03-testing.md), and common problems are in
[06-troubleshooting.md](06-troubleshooting.md).
