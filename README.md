# 📊MonitoringDashboard

A real-time monitoring dashboard built with Angular to help engineers detect, analyze, and respond to service issues quickly. Designed with high-glanceability, resilience, and real-time updates in mind. This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## 🚀Features

 Live Service Monitoring (auto update every 15 seconds),
 Realtime Log Streaming (updates every 3 seconds),
 Status Indicators :
    🟢 UP
    🟡 WARNING
    🔴 DOWN.
 Error Handling & Resilience,
 Responsive UI,
 High-Glanceability Dashboard,

## ⚙️Setup Guide

Follow these steps to run the project locally:

1. Clone the Repository

```bash
git clone https://github.com/Sachiii23/monitoringDashboard-Angular-RxJS.git
cd monitoring-dashboard
```

2. Install Dependencies

```bash
npm install
```

3. Run the Project

``` bash
ng serve
```

4. Open in Browser

```bash
http://localhost:4200
```

## ⚠️Troubleshooting

Angular CLI not found

``` bash
npm install -g @angular/cli
```

Dependency / Cache Issues

``` bash
rm -rf node_modules
npm install
```


## 🧠The "Why" (Architecture & Design Decisions)

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
