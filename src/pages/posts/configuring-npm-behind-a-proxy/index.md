---
title: Configuring nodejs and npm behind a proxy
date: "2017-05-19"
path: "/post/configuring-npm-behind-a-proxy"
post: true
publish: true
---

For people who work in a company and squeez out some of their time to learn nodejs, setting up an dev-environment can be a real pain. Proxy servers are pretty  common in college and business type institutions.

You can locate your proxy settings from your browser's settings panel.

### __Using Proxy with NPM__

Once you have obtained the proxy settings (server URL, port, username and password); you need to configure your npm configurations as follows.


``` bash
npm config set proxy http://<username>:<password>@<proxy-server-url>:<port>
npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port>
```
You would have to replace `<username>`, `<password>`, `<proxy-server-url>`, `<port>` with the values specific to your proxy server credentials.

These fields are optional. For instance, your proxy server might not even require `<username>` and `<password>`, or that it might be running on port 80 (in which case `<port>` is not required).

Once you have set these, your npm install, `npm i -g etc`. would work properly.
