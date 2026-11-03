# Deployment Guide

This document records the deployment workflow used for the React portfolio.
Replace placeholders with the actual values from the deployment.

## 1. Prepare the Application — Laptop

Open a terminal in the React application directory.

For a repository with a valid package-lock.json:

```bash
npm ci
npm run build
```

The Vite build produces a dist directory containing index.html and assets.

The local application build was confirmed ready before proceeding to AWS.

## 2. Create the EC2 Instance — AWS Console

The deployment uses an Ubuntu EC2 instance.

Record the actual configuration:

- Region: [isi]
- Instance name: [isi]
- Instance type: [isi]
- Ubuntu version: [isi]
- Storage: [isi]
- Key pair name: [isi nama saja]

The instance requires a public IP and a subnet with an internet route
through an internet gateway for this connection method.

Configure security group inbound rules:

- SSH, TCP 22: administrator's public IP /32.
- HTTP, TCP 80: 0.0.0.0/0.

## 3. Connect Through SSH — Laptop

For Windows PowerShell, from the directory containing the key:

```powershell
ssh -i ".\YOUR_KEY.pem" ubuntu@YOUR_PUBLIC_IP
```

Replace YOUR_KEY.pem and YOUR_PUBLIC_IP with the actual values.

Use ubuntu as the login user for the Ubuntu image used in this guide.

## 4. Install Nginx — EC2

```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl enable --now nginx
```

Check the service:

```bash
sudo systemctl is-active nginx
```

The expected output is active.

At this stage, opening http://YOUR_PUBLIC_IP should display the default
Nginx page.

## 5. Prepare the Website Directory — EC2

```bash
sudo mkdir -p /var/www/portfolio
sudo chown ubuntu:ubuntu /var/www/portfolio
```

## 6. Upload the Production Build — Laptop

Open a new PowerShell terminal in the React project directory.

```powershell
scp -i "C:\PATH\TO\YOUR_KEY.pem" -r .\dist\. ubuntu@YOUR_PUBLIC_IP:/var/www/portfolio/
```

Upload the contents of dist so that index.html is directly inside
/var/www/portfolio.

Check the uploaded files in the EC2 SSH session:

```bash
ls -la /var/www/portfolio
```

## 7. Configure Nginx — EC2

Create the site configuration:

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Configuration used in the deployment walkthrough:

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

Save the file, then enable the site and remove the default site link:

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
sudo unlink /etc/nginx/sites-enabled/default
```

These link changes are first-time setup steps. If already applied,
inspect the enabled sites instead of repeating them:

```bash
ls -l /etc/nginx/sites-enabled
```

Validate the configuration:

```bash
sudo nginx -t
```

Reload only if validation succeeds:

```bash
sudo systemctl reload nginx
```

## 8. Open the Website — Browser

Open:

http://54.91.110.158

Use a hard refresh if the browser still displays the default Nginx page.

## Deployment Outcome

The author confirmed that the React website appeared successfully in
the browser.

Detailed command outputs, screenshots, and remaining checks are pending
documentation in 03-testing.md.